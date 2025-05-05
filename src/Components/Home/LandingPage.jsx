import React from 'react'
import EventCard from '../EventCard/EventCard'
import SideBar from '../SideBar/SideBar'

const LandingPage = () => {
  return (
    <div className=' flex bg-gray-200  '>
      <div className=''>
        <SideBar/>
      </div>
      <div className='md:mt-5 md:ml-[10vw]'>
        <span className='text-2xl font-bold '>The Calander</span>
      </div>
      <div className='mt-[140px] ml-[] flex md:-ml-[16vw]'>
        <EventCard/>
      </div>
    </div>
  )
}

export default LandingPage
