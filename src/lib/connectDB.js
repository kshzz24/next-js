import mongoose from "mongoose";

const connection = {};

export const connectDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    // console.log( typeof process.env.NEXT_PUBLIC_DB_URL);
    const db = await mongoose.connect(process.env.NEXT_PUBLIC_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to the database");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error; // Throw the original error for better debugging
  }
};
