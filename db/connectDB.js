import mongoose from "mongoose";


export default function connectDB(DATABASE_URL){



    const options={
        dbName:'CV',
        useNewUrlParser: true, 
        useUnifiedTopology: true
      }
        mongoose.connect(DATABASE_URL,options).then(()=>{console.log('Database Connected Successfully')}).catch(e=>console.log('error',e))
    

}

