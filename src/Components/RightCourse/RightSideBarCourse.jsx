import React, { useEffect, useState } from 'react'
import axios from '../../../axiosBase';



const RightSideBarCourse = () => {
  const [sideBarData,setsideBarData]=useState([])
  useEffect(()=>{
    const getCourses=async ()=>{
      try {
        const {data}= await axios.get('/calander/allcalanders');
        setsideBarData(data.findEvents)
      } catch (error) {
        console.log(object)
      }
    }
    getCourses()
  },[])
  return (
    <>
     <div className='w-[250px] md:mt-1.5 h-full rounded-[5px] py-7 bg-[#1F2937]'>
        <div className='flex flex-col  justify-center  md:w-[200px] md:ml-5 md:h-auto'>
          <div className=''>
            <span className='text-white text-2xl font-mono'>Course Names</span>
          </div>
          <div className='md:mt-4 flex justify-center items-center md:gap-2 flex-col bg-gray-300'>
            {sideBarData.map((side,index)=>(
              <div className='' key={index}>{side.course.coursename}</div>
            ))}
          </div>
        </div>
    </div> 
    </>
  )
}

export default RightSideBarCourse
