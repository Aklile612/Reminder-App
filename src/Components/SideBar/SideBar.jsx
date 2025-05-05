import React from 'react'
import { FaGraduationCap ,FaRobot } from 'react-icons/fa'

import { MdHome } from 'react-icons/md'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='w-[250px] md:mt-1.5   h-[91vh] bg-[#1F2937]'>
      <div className='pt-5 flex flex-col md:gap-4'>
        <div className='flex md:gap-1.5 md:ml-3 h-10 w-[200px] md:pl-4  items-center hover:bg-gray-400 rounded-[10px] group hover:scale-110'>
          <MdHome className='text-2xl text-white '/>
          <span className='text-white font-bold'>Dashbored</span>
        </div>
        <div className='flex md:gap-1.5 md:ml-3 h-10 w-[200px] md:pl-4  items-center hover:bg-gray-400 rounded-[10px] group hover:scale-110'>
          <FaGraduationCap className='text-2xl text-white '/>
          <span className='text-white font-bold'>Courses</span>
        </div>
        <div className='flex md:gap-1.5 md:ml-3 h-10 w-[200px] md:pl-4  items-center hover:bg-gray-400 rounded-[10px] group hover:scale-110'>
          <FaRobot className='text-2xl text-white '/>
          <span className='text-white font-bold'>Ai Assistant</span>
        </div>
      </div>
        
    </div>
  )
}

export default SideBar
