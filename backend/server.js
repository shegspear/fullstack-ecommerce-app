import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config()

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
   res.send('API is running');
});

// SOME MIDDLEWARE
app.use(cors());

// FOR ROUTE
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// FOR VISITING A NONE EXISTING PAGE
app.use(notFound);

// FOR INDICATING EROORS
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));