import React from 'react'
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"
import { Link } from 'react-router-dom'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { FaBrain, FaGraduationCap } from 'react-icons/fa'
const GetStarted = () => {
  return (
    <div>
        <Header/>
        {/* stay organized */}
      <div className='md:ml-[25vw] md:mt-[10vh] flex flex-col md:gap-5'>
        <span className='text-5xl text-[#1F2937]'>Stay Organized with Best Reminders</span>
        <span className='max-w-[60vw] text-[#1F2937] font-bold md:ml-[20px] break-words'>Ever tired of missing an assignment a test and when you wake up it is the DeadLine.It won't happen again!!.Never miss an important schedule in our platform organize tests , quizes,assignmentes,   mid exam....</span>
      </div>

        {/* get strted button */}
        <Link to="/" className=' hover:ease-out hover:scale-110 transition-all delay-75 hover:border-amber-600 hover:border-2 flex justify-center items-center  md:w-[10vw] md:h-[50px] md:mt-[6vh] md:ml-[44vw] bg-[#1F2937] rounded-[6px]'>
            <span className='text-white font-bold text-sm'>Get Started</span>
        </Link>


        {/* features */}
        <div className='md:mt-[20vh] md:mx-[10vw] md:mb-[45px] flex gap-14 '>
            <div className='flex flex-col'>
                <span className='md:ml-[9vw] animate-pulse  text-3xl'><MdOutlineAccessTimeFilled /></span>
                <span className='md:ml-[6vw] md:mb-3 font-bold text-lg'>Best Scheduling</span>
                <span className='max-w-[55vh] text-sm break-words'>Best scheduling that will adapt your routine and prefences</span>
            </div>
            <div className='flex flex-col'>
                <span className='md:ml-[9vw] animate-pulse  text-3xl'><FaGraduationCap/></span>
                <span className='md:ml-[6vw] md:mb-3 font-bold text-lg'>Course Management</span>
                <span className='max-w-[55vh] text-sm break-words'>Keep track your courses assignmentes and deadlines effortiessly.</span>
            </div>
            <div className='flex flex-col'>
                <span className='md:ml-[9vw] animate-pulse  text-3xl'><FaBrain /></span>
                <span className='md:ml-[6vw] md:mb-3 font-bold text-lg'>Ai Assistant</span>
                <span className='max-w-[55vh] text-sm break-words'>Get intellegient suggestions and get fast response about the topic </span>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default GetStarted
