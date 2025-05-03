import {StatusCodes} from "http-status-codes"
import Course from "../Model/courseModel.js"

const addCourse= async (req,res)=>{
    const {department_name,coursename }=req.body;
    
    if (!department_name || !coursename){
        return res.status(StatusCodes.BAD_REQUEST).json({message:"please fill all the fields"})
    }

    try {

        const findcourse= await Course.findOne({department_name,coursename})

        if (findcourse) {
            return res.status(StatusCodes.CONFLICT).json({ message: "Course already exists in this department" });
          }
        const addNewDepartmentandCourse= new Course({
            coursename:coursename,
            department_name:department_name
        })
        const course= await addNewDepartmentandCourse.save()
        return res.status(StatusCodes.ACCEPTED).json({message:"saved the department and course",course})
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"there is some issue with the server!"})
    }

}
export default addCourse;