import React, { useContext, useEffect } from 'react'
import { BiLinkExternal, BiSolidEdit } from 'react-icons/bi'
import { IoMdTime } from 'react-icons/io'
import { IoListSharp } from 'react-icons/io5'
import { MdCalendarToday, MdDelete, MdNotifications, MdOutlineAccessTimeFilled } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { CalanderIdStore } from '../../App'
import axios from '../../../axiosBase';
import { getRemainingTime } from '../../../Backend/utils/dateUtils'
import { LuFileSpreadsheet } from 'react-icons/lu'

const SingleEvent = () => {
  const { calanderID } = useContext(CalanderIdStore)
  const events = Array.isArray(calanderID)
  ? calanderID
  : calanderID && typeof calanderID === 'object'
  ? [calanderID]
  : []
  // console.log(calanderID)
  if (events.length === 0) {
    return <div className='text-center text-gray-500 mt-5'>No Course is Selected</div>
  }

 
  
  
  return (
    <div className='flex flex-wrap gap-4 md:ml-[5vw]'>
      {events.map((event, index) => {
        const { course, topic, date, remindertime } = event;
        let type = "";
        if (event.assignment) {
          type = "Assignment";
        } else if (event.quiz) {
          type = "Quiz";
        } else if (event.mid) {
          type = "Mid";
        } else {
          type = "final";
        }
        const remaining = getRemainingTime(date);
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
        const formattedTime = new Date(remindertime).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });

        return (
          <div key={index} className='group hover:-translate-y-1 md:w-[25vw] md:h-[45vh] border-[2px] rounded-[6px] border-gray-100 shadow-gray-300 shadow-[20px] bg-[#ffffff] p-4'>
            <div>
              <div className='text-2xl font-serif'>{course.coursename}</div>
              <div className='flex gap-3 text-[#1F2937] my-4'>
                <IoMdTime />
                <span className='text-sm font-bold'>{remaining}</span>
              </div>
              <div className='flex gap-3 text-[#1F2937] mt-2'>
                <IoListSharp />
                <span className='text-sm font-semibold'>Topic: {topic}</span>
              </div>
              <div className='flex gap-3 text-[#1F2937] mt-2'>
                <LuFileSpreadsheet />
                <span className='text-sm font-semibold'>Type: {type}</span>
              </div>
              <div className='flex gap-3 text-[#1F2937] mt-2'>
                <MdCalendarToday />
                <span className='text-sm font-semibold'>Deadline: {formattedDate}</span>
              </div>
              <div className='flex gap-3 text-[#1F2937] mt-4'>
                <MdNotifications />
                <span className='text-sm font-semibold'>Reminder: {formattedTime}</span>
              </div>
              <Link to='/aipage' className='flex items-center gap-1 text-[#1F2937] mt-7'>
                <span className='text-sm underline'>Want to know more about the topic</span>
                <BiLinkExternal />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );

}


export default SingleEvent
