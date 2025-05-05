import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideBar from '../SideBar/SideBar'

const AssistantPage = () => {
  return (
    <>
    <Header/>
    <div className='flex gap-[20px] bg-[#111827]'>
      <div>
        <SideBar/>
      </div>
      <div className='md:w-[70vw]  md:h-[78vh] rounded-[3px] md:mx-[40px] md:mt-[50px] bg-[#353f4e]'>
        <div className='md:w-[55vw] md:my-7 rounded-[6px] md:h-[70vh] md:mx-[30px] bg-[#111827]'>
          <span className='text-white'></span>
        </div>
      </div>
    </div>
    



    <Footer/>
    </>
  )
}

export default AssistantPage
