import React from 'react'
import EventCard from '../EventCard/EventCard'
import SideBar from '../SideBar/SideBar'

const LandingPage = () => {
  return (
    <div className=' flex  '>
      <div className=''>
        <SideBar/>
      </div>
      <div className='mt-[140px] ml-[100px]'>
        <EventCard/>
      </div>
    </div>
  )
}

export default LandingPage
