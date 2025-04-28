import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { FaAngleDown } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";




const CoursesPage = () => {
  const [elecLink,setelectLink]=useState(false)
  const [informationLink,setinformationLink]=useState(false)
  const [openCourseIndex, setOpenCourseIndex] = useState(null)
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
  // console.log(informationLink,elecLink)
  return (
    <>
      <Header/>

      <div className='w-[300px]   h-[110vh] bg-[#221f1fe3]'>
          <div className=''>
            <div className='flex flex-col md:gap-7 items-center justify-center'>
              <div className='flex items-center md:mt-11 justify-center md:w-[150px] md:h-[50px] rounded-2xl hover:shadow-amber-500 hover:shadow-sm hover:-translate-y-1 bg-gray-300'>
                <span className='font-bold'>Course Names</span>
              </div>
              <div className='md:w-[290px] md:h-[50px] bg-gray-400 items-center flex justify-between   '>
                <span className='md:ml-2'>Information Science</span>
                <div onClick={()=>{
                  setinformationLink(!informationLink)
                }}  className='md:mr-2'><FaAngleDown/></div>
              </div>
              <div className='flex flex-col'>

                {informationLink && (
                  
                  <div className='flex flex-col gap-1 md:-mt-6'>
                    {courseName.map((course,index)=>(
                      
                      <div className='flex flex-col '  >

                        <div key={index} className='md:w-[230px] md:h-[30px] bg-amber-50 font-bold  flex  items-center  justify-between' >{course.title} <div onClick={() => setOpenCourseIndex(openCourseIndex === index ? null : index)}
                        ><FaAngleDown/></div >

                        </div>
                        <div className='flex justify-center '>
                        {openCourseIndex === index && (
                          <div className="flex flex-col gap-1">
                            {acadamictimes.map((acadamic, subIndex) => (
                              <div className='md:w-[190px] md:h-[30px] bg-gray-500 font-bold  flex  items-center text-white justify-between' key={subIndex}>{acadamic.name} <FaPlus/> 
                              </div>
                              
                            
                            ))}
                          </div>
                        )}
                        </div>
                      </div>
                      
                      
                    ))}
                  </div>
                
                )}
              </div>
              <div className='md:w-[290px] md:h-[50px] bg-gray-400 items-center flex justify-between   '>
                <span className='md:ml-2'>Electrical Engineering</span>
                <div onClick={()=>{
                  setelectLink(!(elecLink))
                }} className='md:mr-2'><FaAngleDown /></div>
              </div>
              <div className='flex flex-col'>
                {elecLink && (
                  <div className='flex flex-col gap-1 md:-mt-6'>
                    {courseName1.map((course,index)=>(
                      
                      <div className='flex flex-col '  >

                        <div key={index} className='md:w-[230px] md:h-[30px] bg-amber-50 font-bold  flex  items-center  justify-between' >{course.title} <div onClick={() => setOpenCourseIndex(openCourseIndex === index ? null : index)}
                        ><FaAngleDown/></div >

                        </div>
                        <div className='flex justify-center '>
                        {openCourseIndex === index && (
                          <div className="flex flex-col gap-1">
                            {acadamictimes.map((acadamic, subIndex) => (
                              <div className='md:w-[190px] md:h-[30px] bg-gray-500 font-bold  flex  items-center text-white justify-between' key={subIndex}>{acadamic.name} <FaPlus/> 
                              </div>
                              
                            
                            ))}
                          </div>
                        )}
                        </div>
                      </div>
                      
                      
                    ))}
                  </div>

                )}
              </div>
            </div>
          </div>
      </div>

      <div className=''>

      <Footer/> 
      </div>
    </>
  )
}

export default CoursesPage
