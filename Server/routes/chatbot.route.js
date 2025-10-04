import { Router } from "express";
import {
  createSession,
  getHistory,
  sendMessage
} from "../controllers/chatbotController.js"

const router = Router();

router.route("/session/create").post(createSession);
router.route("/chat/history").get(getHistory);//?sessionId=123...
router.route("/chat/send").post(sendMessage);//{sessionId, message}

export default router;
