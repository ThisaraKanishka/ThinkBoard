import mongoose from "mongoose";
import dns from "node:dns/promises";

dns.setServers(["1.1.1.1", "1.0.0.1"]);

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://user_1:ULVLNb51xaDvAOfz@cluster0.miunorh.mongodb.net/?appName=Cluster0");
        console.log("Connected to MongoDB Successfully!");  
    } catch (error) {
        console.log("eRROR CONNECTING TO MONGODB", error);
    }
}

