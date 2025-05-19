import React, { useContext, useEffect, useState } from 'react'
import axios from '../../../axiosBase';
import { CalanderIdStore } from '../../App';



const RightSideBarCourse = () => {
  const [sideBarData,setsideBarData]=useState([])
  const { calanderID,setcalanderId } = useContext(CalanderIdStore)
  useEffect(()=>{
    const getCourses=async ()=>{
      try {
        const {data}= await axios.get('/calander/allcalanders');
        const uniqueCourses = [];
        const courseNames = new Set();
  
        for (let item of data.findEvents) {
          const courseName = item.course.coursename;
          if (!courseNames.has(courseName)) {
            courseNames.add(courseName);
            uniqueCourses.push(item);
          }
        }
  
        setsideBarData(uniqueCourses);
        console.log(data.findEvents)
      } catch (error) {
        console.log(error)
      }
    }
    getCourses()
  },[])
  const getCalanderOnSingleCourse=async(id)=>{
    try {
      const {data}=await axios.get(`/calander/singlecoursecalander/${id}`)
      
      setcalanderId(data.findTheCalanders)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(calanderID)
  return (
    <>
     <div className='w-[250px] md:mt-1.5 h-full rounded-[5px] py-7 bg-[#1F2937]'>
        <div className='flex flex-col  justify-center  md:w-[200px] md:ml-5 md:h-auto'>
          <div className=''>
            <span className='text-white text-2xl font-mono'>Course Names</span>
          </div>
          <div className='md:mt-4 flex justify-center items-center md:gap-2 flex-col '>
            {sideBarData.map((side,index)=>(
              <div className='text-white flex justify-center font-semibold bg-gray-400  hover:bg-gray-600 hover:rounded-[6px] cursor-pointer hover:scale-105 transition-all h-6 w-full ' key={index} onClick={()=>getCalanderOnSingleCourse(side.course._id)}>{side.course.coursename}</div>
            ))}
          </div>
        </div>
    </div> 
    </>
  )
}

export default RightSideBarCourse
