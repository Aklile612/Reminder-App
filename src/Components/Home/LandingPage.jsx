import React, { useContext, useEffect, useState } from 'react'
import EventCard from '../EventCard/EventCard'
import SideBar from '../SideBar/SideBar'
import RightSideBar from '../Right Side Bar/RightSideBar'
import axios from '../../../axiosBase';
import { getRemainingTime } from '../../../Backend/utils/dateUtils';
import { DeadlineState } from '../../App';
import { Link } from 'react-router-dom';

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
    <div className='flex '>

<div className='flex justify-between'>
  {/* Sidebar */}
  <SideBar />

  {/* Main content */}
  <div className='flex flex-col flex-grow p-5'>
    <div className='flex justify-between items-center'>
      <div className='flex justify-center items-center text-2xl font-bold w-[13vw] h-[7vh] bg-gray-300 rounded-[5px]'>The Calendar</div>
      <Link to='/courses' className='bg-[#1F2937] text-white px-3 py-1 rounded hover:scale-120 '>Add Reminder</Link>
    </div>

    <div className='mt-10 flex flex-col gap-2'>
      
    {cardsData && cardsData.length > 0 ? (
      cardsData.slice(0, 5).map((card, index) => (
    <EventCard
      key={index}
      name={card.course.coursename}
      time={card.date}
      reminder={card.remindertime}
      id={card._id}
      onDelete={handleDelete}
    />
  ))
) : null}
    </div>
  </div>

  {/* Right Sidebar */}
  <div className='ml-30'>

  <RightSideBar len={totalLength?totalLength:0} />
  </div>
</div>
    </div>
  )
}

export default LandingPage
