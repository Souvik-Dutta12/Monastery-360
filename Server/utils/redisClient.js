import { Redis } from 'ioredis'
import dotenv from 'dotenv'

dotenv.config(
  {
    path: './.env'
  }
);
const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");
export default redis;