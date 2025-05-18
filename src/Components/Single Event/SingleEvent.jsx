import React, { useContext, useEffect } from 'react'
import { BiLinkExternal, BiSolidEdit } from 'react-icons/bi'
import { IoMdTime } from 'react-icons/io'
import { IoListSharp } from 'react-icons/io5'
import { MdCalendarToday, MdDelete, MdNotifications, MdOutlineAccessTimeFilled } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { CalanderIdStore } from '../../App'
import axios from '../../../axiosBase';
import { getRemainingTime } from '../../../Backend/utils/dateUtils'

const SingleEvent = () => {
  const { calanderID } = useContext(CalanderIdStore)
  if (!calanderID) {
    return <div className='text-center text-gray-500 mt-5'>No Course is Selected</div>
  }

  const { course, topic, date, remindertime } = calanderID
  const remaining = getRemainingTime(date)
  const formattedTime = new Date(remindertime).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  return (
    <div className='group hover:-translate-y-1 md:w-[27vw] md:ml-[10vw] md:h-[45vh] border-[2px] rounded-[6px] border-gray-100 shadow-gray-300 shadow-[20px] bg-[#ffffff]'>
      <div className='md:ml-7'>
        <div className='md:mt-4 flex flex-col gap-3 justify-center'>
          <span className='text-2xl font-serif text-[23px]'>{course.coursename}</span>
          <div className='flex gap-3 text-[#1F2937]'>
            <IoMdTime className='md:mt-1' />
            <span className='text-sm font-bold mt-0.5'>{remaining}</span>
          </div>
        </div>

        <div className='md:mt-5 flex flex-col gap-2'>
          <div className='flex gap-3 text-[#1F2937]'>
            <IoListSharp className='mt-0.5' />
            <span className='text-sm font-semibold'>Topic: {topic}</span>
          </div>
          <div className='flex gap-3 text-[#1F2937]'>
            <MdCalendarToday className='mt-0.5' />
            <span className='text-sm font-semibold'>Deadline Date: {formattedDate}</span>
          </div>
          <div className='flex gap-3 md:mt-2 text-[#1F2937]'>
            <MdNotifications className='mt-0.5' />
            <span className='text-sm font-semibold'>Reminder set for: {formattedTime}</span>
          </div>
          <Link to='/aipage' className='flex gap-1 md:mt-4 text-[#1F2937]'>
            <span className='text-sm font-semibold underline decoration-black'>Want to know more about the topic</span>
            <BiLinkExternal className='font-semibold' />
          </Link>
        </div>
      </div>
    </div>
  )
}


export default SingleEvent
