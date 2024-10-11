import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    gender:{
        type:String,
    },
    jobtitle:{
        type:String,
        require:true
    }

},{timestamps:true})


export const User = mongoose.model('User',UserSchema)
