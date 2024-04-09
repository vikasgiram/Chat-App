import User from "../models/user.model.js";
export const getUsersForSidebar=async(req,res)=>{
    try{

        const logggedUserId=req.user._id;
        const filteredUsers=await User.find({ _id: {$ne: logggedUserId}}).select("-password");

        res.status(200).json(filteredUsers);

    }catch(err){
        console.error("Error in getUsersForSidebar: ",err.message);
        res.status(500).json({error:"Internal server error"});
    }
}