import mongoose from "mongoose";
import dns from "node:dns/promises";

dns.setServers(["1.1.1.1", "1.0.0.1"]);

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB Successfully!");  
    } catch (error) {
        console.error("eRROR CONNECTING TO MONGODB", error);
        process.exit(1); // Exit the process with a failure code
    }
}

