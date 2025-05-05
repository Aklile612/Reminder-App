import React from 'react'
import { BiSolidEdit } from 'react-icons/bi'
import { GrFormNextLink } from 'react-icons/gr'
import { MdDelete, MdOutlineAccessTimeFilled } from 'react-icons/md'
import { Link } from 'react-router-dom'

const EventCard = () => {
  return (
    <div className=' group hover:-translate-y-1 md:w-[70vw] shadow-md md:h-[25vh] border-[1px] rounded-[6px] border-amber-50 bg-[#ffffff] '>
      <div>
        <div className='md:ml-5 md:mt-4 flex justify-between'>
          <div className='text-md '>Data Structure And Algorizm</div>
          <div className='flex md:gap-3 md:mr-4'>
          <Link className='md:w-7 flex justify-center md:h-7 items-center hover:bg-gray-200'> 
            <BiSolidEdit />
          </Link>
          <Link className='md:w-7 flex justify-center md:h-7 items-center hover:bg-gray-200'>
          <MdDelete />
          </Link>
          </div>
        </div>
        <div className='flex flex-col md:gap-2 md:ml-5 md:mt-3'>
          <span className='text-[#374151]'>DeadLine: 05-05-2025</span>
          <div className='flex justify-between'>
            <div className='flex  items-center md:gap-3'>
              <MdOutlineAccessTimeFilled className='text-[#374151]'/>
              <span className=' text-[#374151]'>Two weeks Remaining</span>
            </div>
            <div className=''>
              <Link to="/courses" className='group ease-out hover:scale-110 transition-all delay-75  flex md:gap-2 justify-center items-center  md:w-[10vw] md:h-[30px] bg-[#1F2937] rounded-[3px] md:mr-7'>
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
