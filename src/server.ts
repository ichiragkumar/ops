import dotenv from "dotenv"
dotenv.config()
import express from 'express';
import { connectToDb } from "./config/db";
import orderRoutes from './routes/order.route';


const PORT = process.env.PORT || 4001
const app = express()


app.use(express.json())
app.use('/orders', orderRoutes)


app.get("/", (req, res) => {
    res.send("hello world");
});


app.listen(PORT, async () => {
    try {
        await connectToDb();
        console.log(`✅ Server is running at: http://localhost:${PORT}`);
    } catch (error) {
        console.error("❌ Failed to connect to database. Server not started.");
    }
});