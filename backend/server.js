const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");

const app=express();

app.use(cors());
app.use(express.json());

app.get("/api/health",(req,res)=>{
    res.json({message: "backend is running"});
});

const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});