const express=require("express");
const cors=require("cors");
const app=express();
const mongoose=require("mongoose");
const userRoutes=require('./routes/userRoutes');
const bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(cors());
var url="mongodb+srv://mindtree:mindtree@cluster0.wuc4i.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(url);
mongoose.connection.on('connected',()=>{
    console.log("connected");
})
const PORT=process.env.PORT | 3000;
// app.get("/hello",(req,res)=>{
//     res.send("hello");
// })
app.use("/",userRoutes);
app.listen(PORT,()=>{
    console.log("express is running on port 3000");
})