import React from 'react'
import EventCard from '../EventCard/EventCard'
import SideBar from '../SideBar/SideBar'
import RightSideBar from '../Right Side Bar/RightSideBar'

const LandingPage = () => {
  return (
    <div className='flex justify-between'>

    <div className=' flex bg-gray-200 w-[120vw]  '>
      <div className=''>
        <SideBar/>
      </div>
      <div className='md:mt-5 md:ml-[10vw]'>
        <span className='text-2xl font-bold md:-pl-4 '>The Calander</span>
      </div>
      <div className='mt-[140px] ml-[] flex md:-ml-[16vw]'>
        <EventCard/>
      </div>
    </div>
    <div className='bg-gray-200'>
      <RightSideBar/>
    </div>
    </div>
  )
}

export default LandingPage
