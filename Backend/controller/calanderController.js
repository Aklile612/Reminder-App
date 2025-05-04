import {StatusCodes} from "http-status-codes"
import Calendar from "../Model/calander.module.js";
import Course from "../Model/courseModel.js";

//to add calander
const addCalander=async (req,res)=>{
    const {topic,date,remindertime,quiz,assignment,mid,final}=req.body;
    const {course_id}=req.params;



    if (!topic || !date || !remindertime){
        return res.status(StatusCodes.BAD_REQUEST).json({message:"please fill all the fields"})
    }

    try {
        
        const newCalander= new Calendar({
            topic:topic,
            date:date,
            remindertime:remindertime,
            quiz:quiz,
            assignment:assignment,
            mid:mid,
            final:final,
            course:course_id
        })

        const newC= await newCalander.save()
        return res.status(StatusCodes.ACCEPTED).json({message:"calander created",newC})
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"there is some issue with the server!"})   
    }

}

// show all events
const allevents=async (req,res)=>{
    try {
        const findEvents= await Calendar.find().sort({ date: -1 }).populate('course', 'coursename');
        if (!findEvents || findEvents===0){
            return res.status(StatusCodes.OK).json({message:"No recent calanders"})
        }
        return res.status(StatusCodes.OK).json({ findEvents });
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"There was an issue fetching the calendar!"})
    }
}
export {addCalander,allevents}