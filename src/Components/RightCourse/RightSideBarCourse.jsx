import React from 'react'

const RightSideBar = () => {
  return (
    <>
     <div className='w-[250px] md:mt-1.5 h-full rounded-[5px] py-7 bg-[#1F2937]'>
      <div className='bg-gray-600 flex flex-col gap-2 items-center w-[200px] md:h-[150px] rounded-[3px] md:mt-5 md:ml-6'>
        <span className='text-white font-mono text-lg '>Course Statstics</span>
        <div className='flex md:w-[180px] text-white font-semibold justify-between'>
          <span>Total Courses</span>
          <span>{len}</span>
        </div>
        <div className='flex md:w-[180px] text-white font-semibold justify-between'>
          <span>Past Deadlines</span>
          <span>{deadLine}</span>
        </div>
        <div className='flex md:w-[180px] text-white font-semibold justify-between'>
          <span>Upcoming Deadlines</span>
          <span>5</span>
        </div>
      </div>
    </div> 
    </>
  )
}

export default RightSideBar
