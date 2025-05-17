import React from 'react'
import { BiSolidEdit } from 'react-icons/bi'
import { IoMdTime } from 'react-icons/io'
import { IoListSharp } from 'react-icons/io5'
import { MdCalendarToday, MdDelete, MdOutlineAccessTimeFilled } from 'react-icons/md'
import { Link } from 'react-router-dom'

const SingleEvent = () => {
  return (
    <>
      <div className=' group hover:-translate-y-1 md:w-[25vw] md:ml-[10vw]  md:h-[40vh] border-[2px] rounded-[6px] border-gray-100 shadow-gray-300 shadow-[20px] bg-[#ffffff] '>
      <div className='md:ml-7'>
        <div className='  md:mt-4 flex flex-col gap-3 justify-center'>
          <span className='text-2xl font-serif text-[18px] '>Data Structure And Algorizm</span>
          <div className='flex gap-3'>
            <span><IoMdTime className='md:mt-1' /></span>
            <span className='text-sm font-bold'>12 days left</span>
          </div>
        </div>
        <div className='md:mt-5 flex flex-col gap-2'>
            <div className='flex gap-3'>
                <IoListSharp className='mt-0.5' />
                <span className='text-sm '>Topic: Qeues and Deque</span>
            </div>
            <div className='flex gap-3'>
                <MdCalendarToday className='mt-0.5' />
                <span className='text-sm '>Course Date: 2025-o3-09</span>
            </div>
            <div className='flex gap-3'>
                <MdCalendarToday className='mt-0.5' />
                <span className='text-sm '>Course Date: 2025-o3-09</span>
            </div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default SingleEvent
