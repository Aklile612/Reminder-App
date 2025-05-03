import {StatusCodes} from "http-status-codes"
import Calendar from "../Model/calander.module.js";


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
export {addCalander}