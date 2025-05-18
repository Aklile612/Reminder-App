import React, { useContext, useEffect, useState } from 'react'
import { BiSolidEdit } from 'react-icons/bi'
import { GrFormNextLink } from 'react-icons/gr'
import { MdDelete, MdOutlineAccessTimeFilled } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { getRemainingTime } from '../../../Backend/utils/dateUtils';
import axios from '../../../axiosBase';
import { CalanderIdStore, DeadlineState } from '../../App'


const EventCard = ({id,name,time,reminder,onDelete}) => {
  const [idHandler,setidHandler]=useState("")
  const {calanderID,setcalanderId}=useContext(CalanderIdStore)
  const formattedTime = new Date(time).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  const getSingleCalanderInfo=async(calanderID)=>{
    try {
      const {data}=await axios.get(`/calander/singlecalanderdetail/${calanderID}`)

      // console.log(data.findSingleEvent)
      setcalanderId(data.findSingleEvent)
    } catch (error) {
      console.log(error)
    }
  }
  
  const remaining = getRemainingTime(time);

  return (
    <div className=' group hover:-translate-y-1 md:w-[50vw] shadow-md md:h-[25vh] border-[1px] rounded-[6px] border-amber-50 bg-[#ffffff] '>
      <div>
        <div className='md:ml-5 md:mt-4 flex justify-between'>
          <div className='text-md '>{name}</div>
          <div className='flex md:gap-3 md:mr-4'>
          <Link className='md:w-7 flex justify-center md:h-7 items-center hover:bg-gray-200'> 
            <BiSolidEdit />
          </Link>
          <span onClick={() => onDelete(id)} className='md:w-7 flex justify-center md:h-7 items-center hover:bg-gray-200'>
          <MdDelete />
          </span>
          </div>
        </div>
        <div className='flex flex-col md:gap-2 md:ml-5 md:mt-3'>
          <span className='text-[#374151]'>DeadLine: {formattedTime}</span>
          <div className='flex justify-between'>
            <div className='flex  items-center md:gap-3'>
              <MdOutlineAccessTimeFilled className='text-[#374151]'/>
              <span className=' text-[#374151]'>{remaining}</span>
            </div>
            <div className=''>
              <Link to="/courses" onClick={()=>{
                
                getSingleCalanderInfo(id)}} className='group ease-out hover:scale-110 transition-all delay-75  flex md:gap-2 justify-center items-center  md:w-[10vw] md:h-[30px] bg-[#1F2937] rounded-[3px] md:mr-7'>
                <span className='text-white font-bold text-sm '>View Details </span>
                <span className='text-white'><GrFormNextLink /></span>
              </Link>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard
