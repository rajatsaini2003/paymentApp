const express=require('express');
const zod= require('zod');
const jwt = require('jsonwebtoken');
const User=require('../models/user');
const router = express.Router();
const signupSchema=zod.object({
    username:zod.string(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string()

})
router.post('signup',async (req,res)=>{
    const body=req.body;
    const {success} = signupSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            message: "Email already taken / incorrect inputs"
        })
    }
    const existingUser = User.findOne({
        username:body.username
    })

    if(existingUser){
        return res.status(411).json({
            message: "username already taken / incorrect"
        })
    }
    const user = await User.create({
        username:body.username,
        password:body.password,
        firstName:body.firstName,
        lastName:body.lastName
    });
    const token =jwt.sign({
        userId: user._id
    }, process.env.JWT_SECRET);

    res.status(200).json({ 
        message: "user created successfully",
        token:token
    })
})

module.exports= router;