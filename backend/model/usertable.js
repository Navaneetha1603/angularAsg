const mongoose=require("mongoose");
const usersSchema= new mongoose.Schema({
    username:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true},
    gender:{type:String,required:true},
})
//create model
const usertable=mongoose.model("usertable",usersSchema);

module.exports=usertable;