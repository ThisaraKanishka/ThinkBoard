import express from "express"
import noteRoutes from "./routes/noteRoutes.js"
import { connectDB } from "./config/db.js" 
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();

app.use("/api/notes", noteRoutes);
connectDB(); 

app.listen(5001, () => {
    console.log("Server is running on port 5001");
});

  