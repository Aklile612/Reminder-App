import React from 'react'
import { BiLinkExternal, BiSolidEdit } from 'react-icons/bi'
import { IoMdTime } from 'react-icons/io'
import { IoListSharp } from 'react-icons/io5'
import { MdCalendarToday, MdDelete, MdNotifications, MdOutlineAccessTimeFilled } from 'react-icons/md'
import { Link } from 'react-router-dom'

const SingleEvent = () => {
  return (
    <>
      <div className=' group hover:-translate-y-1 md:w-[27vw] md:ml-[10vw]  md:h-[45vh] border-[2px] rounded-[6px] border-gray-100 shadow-gray-300 shadow-[20px] bg-[#ffffff] '>
      <div className='md:ml-7'>
        <div className='  md:mt-4 flex flex-col gap-3 justify-center'>
          <span className='text-2xl font-serif text-[23px] '>Data Structure And Algorizm</span>
          <div className='flex gap-3 text-[#1F2937]'>
            <span><IoMdTime className='md:mt-1' /></span>
            <span className='text-sm font-bold mt-0.5'>12 days left</span>
          </div>
        </div>
        <div className='md:mt-5 flex flex-col gap-2 '>
            <div className='flex gap-3 text-[#1F2937]'>
                <IoListSharp className='mt-0.5' />
                <span className='text-sm font-semibold'>Topic: Qeues and Deque</span>
            </div>
            <div className='flex gap-3 text-[#1F2937]'>
                <MdCalendarToday className='mt-0.5' />
                <span className='text-sm font-semibold '>DeadLine Date: 2025-03-09</span>
            </div>
            <div className='flex gap-3 md:mt-2 text-[#1F2937]'>
                <MdNotifications className='mt-0.5' />
                <span className='text-sm font-semibold'>Reminder set for: 2025-03-05</span>
            </div>
            <Link to='/aipage' className='flex gap-1 md:mt-4 text-[#1F2937]'>
                <span className='text-sm font-semibold underline decoration-black '>Want to know more about the topic</span>
                <BiLinkExternal className='font-semibold' />
            </Link>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default SingleEvent
