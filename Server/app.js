import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import monasteryRoutes from './routes/monasteryRoutes.js';
import tourRoutes from './routes/tourRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import authRoutes from './routes/authRoutes.js';
import languageRoutes from './routes/languageRoutes.js';
import recommendationRoutes from './routes/recommendationRoutes.js';
import chatbotRoutes from './routes/chatbotRoutes.js';
import { i18nMiddleware, autoDetectLanguage } from './middleware/i18nMiddleware.js';
import { translateResponse } from './middleware/translationMiddleware.js';

const app = express();

app.use(cors({origin :'*'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

// Apply i18n middleware to all routes
app.use(i18nMiddleware);
app.use(autoDetectLanguage);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/monasteries', monasteryRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/language', languageRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/chatbot', chatbotRoutes);

// Apply translation middleware to all responses
app.use(translateResponse);

export {app}