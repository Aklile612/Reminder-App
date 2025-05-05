import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideBar from '../SideBar/SideBar'

const AssistantPage = () => {
  return (
    <>
    <Header/>

    <div className='w-[90vw] h-[78vh]'>
        <div className='md:w-[90vw] md:h-[78vh] ml-[5vw] mt-[5vh] bg-gray-500'>
          <span>Reminder Ai</span>
        </div>
    </div>



    <Footer/>
    </>
  )
}

export default AssistantPage
