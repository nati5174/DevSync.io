import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Your Vite dev server
    credentials: true
}));

app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});