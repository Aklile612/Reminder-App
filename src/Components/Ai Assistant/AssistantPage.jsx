import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideBar from '../SideBar/SideBar'
import { IoIosSend } from 'react-icons/io'
import { FaRobot } from 'react-icons/fa'

const AssistantPage = () => {
  return (
    <>
    <Header/>
    <div className='flex gap-[20px] bg-[#111827]'>
      <div>
        <SideBar/>
      </div>
      <div className='md:w-[70vw]  md:h-[78vh] rounded-[3px] md:mx-[40px] md:mt-[50px] bg-[#353f4e]'>
        {/* <div className='flex gap-4 md:ml-3'>
        <FaRobot className='text-[20px] text-white'/>
        <span className='text-white font-serif'>Reminder Ai</span>
        </div> */}
        <div className='flex flex-col justify-between md:w-[55vw] md:my-4 rounded-[6px] md:h-[70vh] md:mx-[30px] bg-[#111827]'>
          <div className='md:mt-4 md:ml-3.5'>
            <span className='text-white'>Response</span>
          </div>
          <div className='flex md:gap-4'>
            <form className='md:mb-3'>

              <input 
                  className=' w-[46vw] rounded-[6px] bg-[#374151] md:pl-2 h-10 ml-5 text-white placeholder:text-white placeholder:text-xs placeholder:font-mono' 
                  type="text"
                  name='question'
                  placeholder="Type Your Question Here......"
                  />
            </form>
            <div className='text-3xl flex items-center justify-center rounded-[7px] text-white md:w-[40px] md:h-[40px]  bg-[#374151]'>
            <IoIosSend />
            </div>
          </div>
        </div>
      </div>
    </div>
    



    <Footer/>
    </>
  )
}

export default AssistantPage
