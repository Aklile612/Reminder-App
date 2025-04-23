import React from 'react'

const EventCard = () => {
  return (
    <div>
      <div className='bg-gray-500 w-[300px] h-[170px] rounded-2xl'>
            <div>
              <div className='text-center pt-5'>
                <span className='text-white text-lg font-bold'>English</span>
              </div>
              <div className='flex gap-1.5 md:pl-4'>
                <span className=' text-white text-lg font-bold'>Final Exam - </span>
                <span className='text-white text-lg font-bold'>23-04-2025</span>
              </div>
              <div>
                <span>🔔 1 Day Left</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default EventCard
