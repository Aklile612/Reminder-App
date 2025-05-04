import React from 'react'
import icon from "../../assets/icon.webp"
import { Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { FaBook, FaRegFolderOpen } from "react-icons/fa";
import ai from "../../assets/ai.png"
import { FaRobot } from "react-icons/fa6";
import { IoIosNotificationsOutline } from 'react-icons/io';
import { MdHome } from 'react-icons/md';
import { LuLogOut } from 'react-icons/lu';



const Header = () => {
  return (
    <div >
      <div className='flex bg-blue-950 md:h-13  justify-between items-center'>
        <div className='flex md:gap-3'>
          <div className='text-white text-4xl md:ml-[80px]'>
            <IoIosNotificationsOutline />
          </div>
          <div className='flex items-center'>
            <span className='text-white font-bold '>Reminder App</span>
          </div>
        </div>
        <div className=''>
          <div className='flex justify-center text-center items-center md:gap-6 md:mr-3'>
            <div className=''>
                <Link to='/' className='group flex md:gap-2 text-white hover:text-blue-700 transition-colors'>
                    <MdHome className='text-2xl '/>
                    <span className='  text-sm md:mt-1'  >HOME</span>
                </Link>
            </div>
            <div>
                <Link to='/courses' className='group flex md:gap-2 text-white hover:text-blue-700 transition-colors '>
                    <FaBook className=' md:mt-1'/>
                    <span className='text-sm  md:mt-0.5'>COURSES</span>
                </Link>
            </div>
          <div>
            <Link to='/aipage' className='group flex md:gap-2 text-white hover:text-blue-700 transition-colors '>
              <FaRobot className=' text-[20px]'/>
              <span className=' text-sm'>AI</span>
            </Link>
          </div>

          <Link to="/getstarted" className='group md:w-[90px] md:h-9 bg-[#3b3a3a] rounded-[10px] flex gap-1.5 hover:ease-out hover:scale-110 transition-all  justify-center items-center border-[1px]'>
            
              <span className='text-white font-bold text-sm'>Logout</span>
              <LuLogOut className='text-white' />
          </Link>
          </div>
        </div>
      </div>
      
      </div>
  )
}

export default Header
