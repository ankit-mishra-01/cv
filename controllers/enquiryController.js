import Enquiry from "../models/Enquiry.js";
import {
  isEmail,
  isMobile,
  isName,
  isCountry
} from "../utility/validator.js";

export const addEnquiry = async (req, res) => {
  const { name, email,country,callingCode, mobile, subject, description } = req.body;
  let data = { name, email,country,callingCode, mobile, subject, description };
  let messages=[]


  let newEnquirySuccessflag =
    isEmail(email) === true &&
    isName(name) === true &&
    isMobile(mobile) === true;
    isCountry(country)

  if (newEnquirySuccessflag) {
    const newEnquiry = await Enquiry.create(data)
      .then((e) => e)
      .catch((e) => e);
    if (newEnquiry) {
      return res.status(201).send(newEnquiry);
    }
  }
  isEmail(email)!==true?messages.push(isEmail(email)):""
  isMobile(mobile)!==true?messages.push(isMobile(mobile)):""
  isName(name)!==true?messages.push(isName(name)):""
  isCountry(country)!==true?messages.push(isCountry(country)):""
  
  return res.status(400).json({messages});
};
