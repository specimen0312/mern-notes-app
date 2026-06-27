const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
require("dotenv").config();

const app=express();

app.use(cors());
app.use(express.json());

app.get("/api/health",(req,res)=>{
    res.json({message: "backend is running"});
});

const PORT=process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
})
.catch((error)=>{
    console.error("Error connecting to MongoDB:", error);
}); 