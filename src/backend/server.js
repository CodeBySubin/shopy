import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';      // Import the default export
const { json } = bodyParser;              // Destructure the `json` method
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middleware/errorHandler.js';

// dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(json());

// API Routes
app.use('/api/users', userRoutes);

// Error Handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
