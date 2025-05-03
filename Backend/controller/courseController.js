import {StatusCodes} from "http-status-codes"
import Course from "../Model/courseModel.js"
import Department from "../Model/departmentModel.js";



//add course
const addCourse= async (req,res)=>{
    const {department_name,coursename }=req.body;
    
    if (!department_name || !coursename ){
        return res.status(StatusCodes.BAD_REQUEST).json({message:"please fill all the fields"})
    }

    try {
        let department = await Department.findOne({name:department_name})

        if (!department){
            department= new Department({
                name:department_name
            });
            await department.save();
        }

        const findcourse= await Course.findOne({department:department._id,coursename})

        if (findcourse) {
            return res.status(StatusCodes.CONFLICT).json({ message: "Course already exists in this department" });
          }
        const addNewDepartmentandCourse= new Course({
            coursename:coursename,
            department:department._id,
        })
        const course= await addNewDepartmentandCourse.save()
        return res.status(StatusCodes.ACCEPTED).json({message:"saved the department and course",course})
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"there is some issue with the server!"})
    }

}
//find department

const findDepartment= async  (req,res)=>{
    const {department_id}= req.params;
    if (!department_id) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: "Department ID is required" });
    }

    try {
        // Find department by _id
        const department = await Department.findById(department_id);

        return res.status(StatusCodes.OK).json({ department });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error finding department by ID" });
    }

}
//find course by department

const findcourse=async (req,res)=>{

    const {department_id}=req.params;

    if (!department_id){
        return res.status(StatusCodes.BAD_REQUEST).json({ message: "Department name is required" });
    }
    try {
        const courses=await Course.find({department:department_id})

        if(!courses||courses.length===0){
            return res.status(StatusCodes.BAD_REQUEST).json({message:"No course exist in this department!"})
        }
        return res.status(StatusCodes.OK).json({message:"Courses Found",courses})
        
        
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"there is some issue with the server!"})
    }
}
export  {addCourse,findDepartment};