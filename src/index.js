
import dotenv from "dotenv"
import mongoose from "mongoose";
import {DB_name} from "./constant.js";
import connectDB from "./db/index.js";
import {app} from './app.js';
/*import express from "express"

(async () =>{
    try{
  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
  application.on("error",(error)=>{
console.log("ERROR")
throw error
  })
  application.listen(process.env.PORT,() =>{
    console.log(`APP is Listening on port ${process.env.PORT}`)
  })
    }
    catch(error){
console.log("ERROR: ",error)
throw err
    }
}) ()*/
dotenv.config({
    path:'./env'
});
connectDB().then(() => {
    app.listen(process.env.PORT || 9000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.error("MONGO db connection failed !!! ", err);
})
