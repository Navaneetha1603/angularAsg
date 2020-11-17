const express=require("express");
const router=express.Router();
const userController=require('../controllers/userControllers');
router.get("/test",(req,res)=>{
    return res.json({message:"hello"});
})
router.get("/user",userController.getUsers);
router.post("/user",userController.createUsers);
router.patch("/users/:Id",userController.updateUsers);
router.delete("/users/:Id",userController.deleteUsers);


module.exports=router;