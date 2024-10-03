import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./db/connectDB.js";
import enquiryRouter from "./routes/enquiryRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000; // Changed from 8000 to 5000
const BASE_URL = process.env.BASE_URL || "http://localhost:5000";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Connection to the database
connectDB(DATABASE_URL)
  .then(() => {
    console.log("Database connected successfully.");
    
    // Middleware
    app.use(express.json());
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use('/', enquiryRouter);
    
    // Start the server after DB connection
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process with failure
  });
