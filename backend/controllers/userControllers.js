const users=require('../model/usertable');
const getUsers=async (req,res)=>{
    try{
        const user=await users.find({});
        return res.json({data:user});
    }
    catch(err){
        return res.status(400).json(err);
    }
}
//create users
const createUsers=async (req,res)=>{
    try{
        const user=new users();
        user.username=req.body.username;
       user.age=req.body.age;
       user.email=req.body.email;
       user.gender=req.body.gender;
       await user.save();
       return res.json({'message':"inserted"});
    }
    catch(err){
        return res.status(300).json(err);
    }
}
//update users
const updateUsers=async (req,res)=>{
    let id=req.params.Id;
    console.log(id);
    try{
        await users.updateOne({"_id":id},
        {
            $set:{"username":"Neethu"}
        }
        );
        return res.json({message:"updated"})
    }
    catch(err){
        return res.status(400).json(err)
    }
}
//delete details
const deleteUsers=async (req,res,next)=>{
    let id=req.params.Id;
    //const userid=req.query._id;
    console.log(id);
    try{
        await users.deleteOne({"_id":id});
        return res.json({"message":"deleted"});
    }
    catch(err){
        return res.status(405).json(err)
    }
}
module.exports={
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
}