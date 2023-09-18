import mongoose from "mongoose";


const enquirySchema =new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    country:{type:String},
    mobile:{type:String},
    callingCode:{type:String},
    subject:{type:String},
    description:{type:String}            
},{timestamps:true})

const Enquiry = mongoose.model('enquiry',enquirySchema);

export default Enquiry;