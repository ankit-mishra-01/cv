import express from "express";
import { addEnquiry } from "../controllers/enquiryController.js";


const enquiryRouter=express.Router();



enquiryRouter.post('/api/enquiry',addEnquiry)
enquiryRouter.get('/',async(req, res)=>{
  return res.status(200).send('backend is running');
})


export default enquiryRouter