import {StatusCodes} from "http-status-codes"
import User from "../Model/user.model.js";
import bcrypt from "bcrypt"

export const signup=async (req,res)=>{
    const {username,email,password}= req.body;

    try {
        const existinguser=await User.findOne({email});

        if (existinguser){
            return res.status(StatusCodes.CONFLICT).json({message: "user already exists!"});
        }
        const hashedpassword= await  bcrypt.hash(password,10);
        const newUser=new User({
            username:username,
            email:email,
            password:hashedpassword
        });
        
        
        
        
        const user= await newUser.save();
        const token=generateToken(user);
        res.status(StatusCodes.CREATED).json({message:"user succesfully created",token,username})
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"some error occured!",error})
    }
}