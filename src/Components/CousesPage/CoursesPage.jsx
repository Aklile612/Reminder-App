import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { FaAngleDown } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import axios from '../../../axiosBase'



const CoursesPage = () => {
  const [link,setLink]=useState(false)
  const [informationLink,setinformationLink]=useState(false)
  const [openCourseIndex, setOpenCourseIndex] = useState(null)
  const [selectedcourse,setselectedcourse]=useState(null)
  const [selectedcalander,setselectedcalander]=useState(null)
  const [departemtName,setdepartemntName]=useState([])
  const [openDepartmentId, setOpenDepartmentId] = useState(null);
  const [departmentCourses,setdepartmentCourses]=useState({})
  const courseName=[
    {title:"Data structure and Algor.."},
    {title:"Advanced DataBase"},
    {title:"Statsics"},
    {title:"Oop"},
    {title:"History"},
    {title:"ISR"}
  ]
  const courseName1=[
    {title:"DLD"},
    {title:"Electronics 2"},
    {title:"Machine"},
    {title:"Electronics Lab"},
    {title:"DLD Workshop"},
    {title:"DLD Lab"}
  ]
  const acadamictimes=[
    {name:"Quiz"},
    {name:"Assignment"},
    {name:"Mid Exam"},
    {name:"Final Exam"},
  ]
  const getDepartemnt=async()=>{
    try {
      const {data}=await axios.get('/course/finddepartment')
      
      setdepartemntName(data.department)
      console.log(data.department)
    } catch (error) {
      console.log(error)
    }
  }
  const getDepartemntCourses=async (department_id)=>{
    try {
      const {data}=await axios.get(`/course/findcourse/${department_id}`)
      setdepartmentCourses(data.courses);
      setOpenDepartmentId(department_id);
      setLink(!(link));
      console.log(data.courses)
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getDepartemnt();
    
  },[])
  // console.log(selectedcourse,selectedcalander.name)
  return (
    <>
      <Header/>
    <div className='flex '>
        
      
      {/* side bar  */}
      <div className='w-[300px]   h-[100vh] bg-[#221f1fe3]'>
          <div className=''>
            <div className='flex flex-col md:gap-7 items-center justify-center'>
              <div className='flex items-center md:mt-11 justify-center md:w-[150px] md:h-[50px] rounded-2xl hover:shadow-amber-500 hover:shadow-sm hover:-translate-y-1 bg-gray-300'>
                <span className='font-bold'>Course Names</span>
              </div>
              <div className='flex flex-col'>

              <div className="flex flex-col space-y-2">
                {departemtName.map((department, index) => (
                  <div
                    key={index}
                    className="md:w-[290px] md:h-[50px] bg-gray-400 flex items-center justify-between rounded-md shadow"
                  >
                    <span className="text-white font-semibold">{department.name}</span>
                    <div className='md:mr-2 ' onClick={()=>{
                      getDepartemntCourses(department._id)
                    }}><FaAngleDown/></div>

                    {link && (
                      <div>
                        {departmentCourses.map((course,index)=>(
                          <div>
                            <span>{course.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
      </div>

      {/* main page */}
      {selectedcourse && selectedcalander &&(

        <div className=' md:ml-[20vw] md:mt-[20vh] w-[400px] h-[30vh] bg-[#a06767] '>
          <div className='flex justify-center'>
            
            <span className='text-white font-bold text-lg'>{selectedcourse}</span>
          </div>
          <div>
            <span className="text-md text-white flex justify-center">What is the topic and the tittle of the portion?</span>
          </div>
          <div >
            <form action="">
              <div className='flex justify-center mt-4'>
                <input type="text" placeholder='Type here....' className='border-white  border-2 w-[350px] h-10 pl-4 pt-2' />
              </div>
            </form>
            
          </div>
          <div>
            <span>Due Date?</span>
          </div>
      </div>
      )}
    </div>
      <div className=''>

      <Footer/> 
      </div>
    </>
  )
}

export default CoursesPage
