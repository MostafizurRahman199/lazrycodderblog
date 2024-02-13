import mongoose from "mongoose";

const mongoUri = process.env.MONGODB_URI as string; 

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};