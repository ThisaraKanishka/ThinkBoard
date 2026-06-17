import express from "express"

import { connectDB } from "./config/db.js" 

const app = express();

connectDB(); 



app.listen(5001, () => {
    console.log("Server is running on port 5001");
});

  