import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({origin :'*'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

//routes
import chatBotRouter from "./routes/chatbot.route.js";
app.use("/api/v1/chatbot", chatBotRouter);


export {app}