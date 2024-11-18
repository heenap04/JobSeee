import { User } from "../models/user.model.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register =async(req,res)=>{
    try{
        const{fullname,email,phoneNumber,password,role}=req.body;
        if(!fullname||!email||!phoneNumber||!password||!role){
            return res.status(400).json({
                message:'something is missing.',
                success:false
            });
        };
        const user =await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:'user already exists with this email',
                success:false,
            })
        }
        const hashedpassword= await bcrypt.hash(password,10);
        await User.create({
            fullname,
            email,
            phoneNumber,
            password:hashedpassword,
            role,
            
        });
        return res.status(201).json({
            message:'account created successfully',
            success:true
        });
    }
    catch(error){
        console.log(error);
    }
}
export const login=async (req,res)=>{
    try{
        const{email,password,role}=req.body;
        if(!email||!password||!role){
            return res.status(400).json({
                message:'something is missing.',
                success:false
            });
        };
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:'incorrect email or password.',
                success:false,
            })
        }
        const isPasswordMatch =await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message:'incorrect email or password.',
                success:false,
            })
        };
        // check role is correct or note
        if(role != user.role){
            return res.status(400).json({
                message:'account doesnt exists with current role.',
                success:false
            })
        };
        const tokendata={
            userId:user._id
        }
        const token=await jwt.sign(tokendata,process.env.SECRET_KEY,{expiresIn:'Id'});
        user={
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile
        }
        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpsOnly:true,sameSite:'strict'}).json({
            message:`Welcome back ${user.fullname}`,
            success:true
        })
    }
    catch(error){
        console.log(error);
    }
}
export const logout =async (req,res)=>{
    try{
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:'logged out successful.',
            success:true
        })
    }
    catch(error){
        console.log(error);
    }
}
export const updateprofile=async(req,res)=>{
    try{
        const{fullname,email,phoneNumber,bio,skills}=req.body;
        const file=req.file;
        if(!fullname||!email||!phoneNumber||!bio||!skills){
            return res.status(400).json({
                message:'something is missing.',
                success:false
            });
        };
        // cloudinary aaega idhar
        const skillsArray=skills.split(",");
        const userId=req.id;
        let user=await User.findById(userId);
        if(!user){
            return res.status(400).json({
                message:'User not found',
                success:false
            })
        }
        user.fullname=fullname,
        user.email=email,
        user.phoneNumber=phoneNumber,
        user.profile.bio=bio,
        user.profile.skills=skillsArray

<<<<<<< HEAD
        await user.save();
        user={
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile
        }
        return res.status(200).json({
            message:'profile updated successfully',
            user,
            success:true
        })
    }
    catch(error){
        console.log(error);
    }
}
=======
//bugubj
>>>>>>> 924e2f1001d51c54f6c919516559306669b9cf04
