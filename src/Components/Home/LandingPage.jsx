import React, { useEffect, useState } from 'react'
import EventCard from '../EventCard/EventCard'
import SideBar from '../SideBar/SideBar'
import RightSideBar from '../Right Side Bar/RightSideBar'
import axios from '../../../axiosBase';

const LandingPage = () => {
  
  const [cardsData,setcardsData]=useState([]);
  const getCalander = async ()=>{

    try {
      const {data}= await axios.get('/calander/allcalanders');

      setcardsData(data.findEvents)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getCalander()
  },[])
  
  console.log(cardsData)


  return (
    <div className='flex justify-between'>

    <div className=' flex  w-[120vw]  '>
      <div className=''>
        <SideBar/>
      </div>
      <div className='md:mt-5 md:ml-[10vw]'>
        <span className='text-2xl font-bold md:-pl-4 '>The Calander</span>
      </div>
      <div className='mt-[140px] ml-[] flex flex-col gap-2 md:-ml-[16vw]'>
        {cardsData.map((card,index)=>(
          <EventCard
             key={index}
             name={card.course.coursename}
             time={card.remindertime}
          />
        ))}
      </div>
    </div>
    <div className='bg-gray-200'>
      <RightSideBar/>
    </div>
    </div>
  )
}

export default LandingPage
