import mongoose from "mongoose";
import {DB_name} from "../constant.js";
const connectDB=async () => {
    try{
              const connectioninstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`);
              console.log(`\n MONGODB connected !! DB HOST : ${connectioninstance.connection.host}`)
    }catch(error)
    {
        console.log("MONGO DB connection error",error)
        process.exit(1)
    }
};
export default  connectDB;