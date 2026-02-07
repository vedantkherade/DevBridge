import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import connectDB from './config/mongoDb.js'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'

const app = express()
const PORT = process.env.PORT || 4000;
app.use(express.json());

//you have to set this to true to connect with frontend
// app.use(cors({credentials: true,}));
app.use(cors({
  origin: "http://localhost:5173", // Vite
  credentials: true
}));

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).send(errorMessage);
 })


// this is done so that we can send cookies in request from the express app
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("api is working");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectDB();
