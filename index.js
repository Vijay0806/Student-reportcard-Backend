
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import  connectDb  from './Database/Config.js';
import studentRoute from "./Routes/studentRoute.js";
import subjectRoute from "./Routes/subjectRoute.js"
import marksRoute from "./Routes/marksRoute.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDb();

app.get("/",(req,res)=>{
    res.send("✨✨Welcome to Our Api ✨✨😍")
})

app.use("/api/student",studentRoute)
app.use("/api/subject",subjectRoute)
app.use("/api/marks",marksRoute)

const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server starting at the Port: ${port}`);
    
})
