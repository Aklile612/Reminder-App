import React, { useContext, useEffect, useState } from 'react'
import EventCard from '../EventCard/EventCard'
import SideBar from '../SideBar/SideBar'
import RightSideBar from '../Right Side Bar/RightSideBar'
import axios from '../../../axiosBase';
import { getRemainingTime } from '../../../Backend/utils/dateUtils';
import { DeadlineState } from '../../App';

const LandingPage = () => {
  
  const [cardsData,setcardsData]=useState([]);
  const [totalLength,settotalLength]=useState()
  const {deadLine,setdeadLine}=useContext(DeadlineState)
  const getCalander = async ()=>{

    try {
      const {data}= await axios.get('/calander/allcalanders');

      setcardsData(data.findEvents)
      settotalLength(data.findEvents.length)
      const each= data.findEvents
      const expiredCount = each.filter(e => getRemainingTime(e.date) === 'Expired').length;
      setdeadLine(expiredCount);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getCalander()
  },[])
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/calander/singlecalanderDelete/${id}`);
      setcardsData((prev) => prev.filter(card => card._id !== id));
      settotalLength((prev) => prev - 1);
    } catch (error) {
      console.log(error);
    }
  };
  
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
        {cardsData.slice(0,5).map((card,index)=>(
          <EventCard
             key={index}
             name={card.course.coursename}
             time={card.date}
             reminder={card.remindertime}
             id={card._id}
             onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
    <div className='bg-gray-200'>
      <RightSideBar len={totalLength}/>
    </div>
    </div>
  )
}

export default LandingPage
