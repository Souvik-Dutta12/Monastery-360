import { Router } from "express";
import {
  createSession,
  getHistory,
  sendMessage
} from "../controllers/chatbotController.js"

const router = Router();

router.route("/session/create").post(createSession);
router.route("/chat/history").get(getHistory);
router.route("/chat/send").post(sendMessage);

export default router;
