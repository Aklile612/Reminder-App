import mongoose from "mongoose";


const courseschema= new mongoose.Schema({
    "coursename":{
        type:String,
        required:true,
    },
    "department_name":{
        type:String,
        required:true,
    }
})

const Course= mongoose.model("course",courseschema)

export default Course;