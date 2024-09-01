const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:4,
        maxLength:15
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:15
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maxLength:15
    },
})

const User=mongoose.model("User",userSchema);
module.exports=User;