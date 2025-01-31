import express from "express";
import cookieParser  from "cookie-parser";
import cors from "cors";
const app=express();
app.use(express.json({limit:"20kb"}));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static("public"));
app.use(cors({
    origin:process.env.CORS_Origin,
    Credentials:true
}))
export {app}