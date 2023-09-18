import express from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import connectDB from "./db/connectDB.js";
import enquiryRouter from "./routes/enquiryRoutes.js";
import bodyParser from "body-parser";

const app=express()
dotenv.config()

const PORT=process.env.PORT || PORT
const BASE_URL = process.env.BASE_URL || "http://localhost:8000";
const DATABASE_URL=process.env.DATABASE_URL ||"mongodb://localhost:27017"

// Connection on database
connectDB(DATABASE_URL)

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use('/',enquiryRouter)



app.listen(PORT,()=>{
    console.log(`App running on port  ${PORT}`);
})