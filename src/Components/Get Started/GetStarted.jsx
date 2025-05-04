import React from 'react'
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"
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
        <div className='flex justify-center items-center  md:w-[10vw] md:h-[50px] md:mt-[10vh] md:ml-[44vw] bg-[#1F2937] rounded-[6px]'>
            <span className='text-white font-bold text-sm'>Get Started</span>
        </div>


        {/* features */}
        <div>

        </div>

        <Footer/>
    </div>
  )
}

export default GetStarted
