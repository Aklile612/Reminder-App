import React from 'react'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { Link } from 'react-router-dom'

const EventCard = () => {
  return (
    <div className=' md:w-[70vw] shadow-md md:h-[25vh] border-[1px] rounded-[6px] border-amber-50 bg-[#ffffff] '>
      <div>
        <div className='md:ml-5 md:mt-4 '>
          <span className='text-md '>Data Structure And Algorizm</span>
        </div>
        <div className='flex flex-col md:gap-2 md:ml-5 md:mt-3'>
          <span className='text-[#374151]'>DeadLine: 05-05-2025</span>
          <div className='flex justify-between'>
            <div className='flex  items-center md:gap-3'>
              <MdOutlineAccessTimeFilled className='text-[#374151]'/>
              <span className=' text-[#374151]'>Two weeks Remaining</span>
            </div>
            <div className=''>
              <Link to="/login" className=' hover:ease-out hover:scale-110 transition-all delay-75 hover:border-amber-600 hover:border-2 flex justify-center items-center  md:w-[10vw] md:h-[30px] bg-[#1F2937] rounded-[3px]'>
                <span className='text-white font-bold text-sm'>View Details</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard
