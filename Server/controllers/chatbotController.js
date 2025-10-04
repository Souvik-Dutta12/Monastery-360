import redis from "../utils/redisClient.js";
import { generateContent } from "../services/chatbot.js";
import { v4 as uuidv4 } from "uuid";

const SESSION_TTL = 60 * 60 * 24 * 7; // 7 days
const MAX_HISTORY = 20;

export const createSession = async (req, res) => {
  const sessionId = uuidv4();
  res.json({ sessionId });
}; 

export const getHistory = async (req, res) => {
  const { sessionId } = req.query;
  if (!sessionId) return res.status(400).json({ error: "sessionId required" });

  const key = `session:${sessionId}:messages`;
  const messages = await redis.lrange(key, 0, -1);
  res.json({ messages: messages.map((m) => JSON.parse(m)) });
};

export const sendMessage = async (req, res) => {
  const { sessionId, message } = req.body;
  if (!sessionId || !message)
    return res.status(400).json({ error: "Missing sessionId or message" });

  const key = `session:${sessionId}:messages`;

  // Save user message
  await redis.lpush(key, JSON.stringify({ role: "user", text: message }));
  await redis.ltrim(key, 0, MAX_HISTORY);
  await redis.expire(key, SESSION_TTL);

  try {
    // Generate AI response
    const historyMessages = await redis.lrange(key, 0, MAX_HISTORY - 1);
    const context = historyMessages
      .reverse()
      .map((m) => JSON.parse(m))
      .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.text}`)
      .join("\n");

    const reply = await generateContent(message, context);

    // Save assistant reply
    await redis.lpush(key, JSON.stringify({ role: "assistant", text: reply }));
    await redis.ltrim(key, 0, MAX_HISTORY);
    await redis.expire(key, SESSION_TTL);

    res.json({ reply });
  } catch (error) {
    console.error("Error generating AI response:", error);
    res.status(500).json({ error: "Failed to generate AI response" });
  }
};
