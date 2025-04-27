import React from 'react'
import icon from "../../assets/icon.webp"
import { Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegFolderOpen } from "react-icons/fa";
import ai from "../../assets/ai.png"
import { FaRobot } from "react-icons/fa6";



const Header = () => {
  return (
    <div >
      <div className='flex bg-blue-950 md:h-8  justify-between items-center'>
        <div className='flex bg-red-600 w-[400px] md:h-8 items-center'>
          <span className='md:ml-2 text-white font-bold text-sm'>Be Organized. We take care of the calander!!</span>
        </div>
        <div className='justify-end'>
          <span className='md:mr-1 text-white font-bold'>Welcome: Aklile</span>
        </div>
      </div>
      <div className='flex bg-[#f2e6e6] z-20 shadow-md shadow-[#968e8e] h-[50px] md:h-[100px]'>
        <Link className='ml-[20px] md:ml-[100px] pt-1 md:pt-2.5 '>
            <img src={icon} alt="icon" className='h-[40px] md:h-[70px] ' />
        </Link>
        <div>
            <div className='flex  gap-10 '>
                <div className='group  hover:text-blue-700 transition-colors ml-[800px] mt-9  '>
                    <IoHomeOutline className='text-2xl'/>
                    <span className='-ml-1.5 text-sm'>HOME</span>
                </div>
                <div className='group  hover:text-blue-700 transition-colors mt-8'>
                    <FaRegFolderOpen className='text-[26px]'/>
                    <span className='-ml-1.5 text-sm'>COURSES</span>
                </div>

                <div className='group  hover:text-blue-700 transition-colors mt-8'>
                  <FaRobot className='text-[26px] md:ml-1.5 ' />
                  <span className='-ml-1.5 text-sm'>Ai Assistant</span>
                </div>
                <div className='border-gray-600 border-l-2 h-15 mt-5 '></div>
                <Link to="/signout" className='text-sm mt-9 -ml-6 hover:text-blue-700 transition-colors'>
                  SIGN OUT
                </Link>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
