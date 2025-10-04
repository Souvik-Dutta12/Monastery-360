import redis from "../utils/redisClient.js";
import { generateContent } from "../services/chatbot.js";
import { v4 as uuidv4 } from "uuid";

const SESSION_TTL = 60 * 60 * 24 * 7; // 7 days
const MAX_HISTORY = 20;

export const createSession = async (req, res) => {
  const sessionId = uuidv4();
  return res.status(201).json({ sessionId, message:"Session created successfully" });
}; 

export const getHistory = async (req, res) => {
  const { sessionId } = req.query;
  if (!sessionId) return res.status(400).json({ error: "sessionId required" });

  const key = `session:${sessionId}:messages`;
  const messages = await redis.lrange(key, 0, -1);
  return res.status(200).json({ messages: messages.map((m) => JSON.parse(m)) , msg :"Messages fetch successfully"});
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
    // Build context
    const historyMessages = await redis.lrange(key, 0, MAX_HISTORY - 1);
    const context = historyMessages
      .reverse()
      .map((m) => JSON.parse(m))
      .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.text}`)
      .join("\n");

    // Headers for streaming
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    let fullReply = "";
    const aiStream = await generateContent(message, context, true);

    for await (const chunk of aiStream) {
      if (chunk.text) {
        fullReply += chunk.text; // accumulate full message
        res.write(chunk.text);   // stream to frontend
      }
    }

    // Save full AI message to Redis after streaming
    await redis.lpush(key, JSON.stringify({ role: "assistant", text: fullReply }));
    await redis.ltrim(key, 0, MAX_HISTORY);
    await redis.expire(key, SESSION_TTL);

    res.end();
  } catch (error) {
    console.error("AI streaming error:", error);
    res.end("Sorry, something went wrong.");
  }
};
