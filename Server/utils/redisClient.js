import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const redis = new Redis(process.env.REDIS_URL, {
  connectTimeout: 10000,
});

redis.on("connect", () => console.log("Connected to Redis successfully"));
redis.on("error", (err) => console.error("Redis error:", err));

export default redis;
