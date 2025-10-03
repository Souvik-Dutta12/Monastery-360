import dotenv from 'dotenv';
import { app } from './app.js';
import connectDB from './db/db.js';

// Load environment variables
dotenv.config(
  {
    path: './.env'
  }
);

const PORT = process.env.PORT || 5000;

 
// Database connection
connectDB().then(() => {
  // Start server
  app.listen(PORT, () => {
    console.log(`⚙️  Server running on port ${PORT}`);
  });
}).catch((err)=>{
  console.log(`DB Connection failed :: ${err}`);
})

