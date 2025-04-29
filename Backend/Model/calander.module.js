import mongoose, { Schema } from "mongoose";


const calanderschema= new mongoose.Schema({
    "coursename":{
        type:Schema.Types.ObjectId,
        ref:'Course'
    },
    "username":{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    "topic":{
        type:String,
        required:true
    },
    "date":{
        type:Date,
        required:true
    },
    "remindertime":{
        type:Date,
        required:true
    },
    "Quiz":{
        type:Date,
        required:false
    },
    "Assignment":{
        type:Date,
        required:false
    },
    "Mid":{
        type:Date,
        required:false
    },
    "Final":{
        type:Date,
        required:false
    }
})