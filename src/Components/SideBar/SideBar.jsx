import React from 'react'
import { FaRegFolderOpen, FaRobot } from 'react-icons/fa'
import { IoHomeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='w-[300px]   h-[100vh] bg-[#221f1fe3]'>
        <div>
            <div className='flex flex-col md:gap-[50px] justify-center items-center md:pt-[130px]'>
                <Link className=' flex group hover:bg-gray-600 hover:w-[200px] hover:rounded-lg hover:scale-110 hover:text-white  -ml-5 gap-3 transition-all'>
                    <IoHomeOutline className='text-2xl   '/>
                    <span className='text-sm font-bold font-poppins text-gray-500'>HOME</span>
                </Link>
                <Link className='group flex gap-3 transition-colors '>
                    <FaRegFolderOpen className=' text-[26px]'/>
                    <span className=' text-sm font-bold text-white'>COURSES</span>
                </Link>

                <Link className='group  ml-1.5 flex gap-3 transition-colors '>
                  <FaRobot className='text-[26px]  ' />
                  <span className=' text-sm font-bold text-white'>Ai Assistant</span>
                </Link>                
            </div>
        </div>
    </div>
  )
}

export default SideBar
