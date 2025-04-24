import React from 'react'
import { Link } from 'react-router-dom'

const EventCard = () => {
  return (
    <div>
      <div className='bg-gray-500 w-[300px] h-[170px] rounded-2xl hover:-translate-y-3 hover:border-blue-800 border-2  transition-all'>
            <div className='group hover:text-red-800 transition-colors'>
              <div className='text-center pt-5'>
                <span className='text-white text-lg font-bold'>English</span>
              </div>
              <div className='flex gap-1.5 md:pl-8'>
                <span className=' text-white text-lg font-bold'>Final Exam - </span>
                <span className='text-white text-lg font-bold'>23-04-2025</span>
              </div>
              <div className='text-center -ml-5 text-white font-bold text-lg'>
                <span>🔔 1 Day Left</span>
              </div>
              <div className=''>
              <div className='text-xs font-bold text-white  md:pl-9 flex gap-20 mt-5 justify-start'>
                <Link className='bg-amber-500 w-[40px] text-center hover:scale-150  transition-all rounded-md md:pt-1 h-6'> EDIT</Link>
                <Link className='bg-red-600 w-[80px] text-center md:pt-1 rounded-md hover:scale-150  transition-all'> DELETE</Link>
              </div>              
              </div>
            </div>
        </div>
    </div>
  )
}

export default EventCard
