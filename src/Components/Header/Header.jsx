import React from 'react'
import icon from "../../assets/icon.webp"
import { Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegFolderOpen } from "react-icons/fa";



const Header = () => {
  return (
    <div>
      <div className='flex bg-[#0f0d0da1] z-20 shadow-md shadow-[#968e8e] h-[50px] md:h-[100px]'>
        <Link className='ml-[20px] md:ml-[100px] pt-1 md:pt-2.5 '>
            <img src={icon} alt="icon" className='h-[40px] md:h-[70px] ' />
        </Link>
        <div>
            <div className='flex  gap-20 text-white'>
                <div className='group  hover:text-blue-700 transition-colors ml-[800px] mt-9  '>
                    <IoHomeOutline className='text-2xl'/>
                    <span className='-ml-1.5'>Home</span>
                </div>
                <div className='group  hover:text-blue-700 transition-colors mt-9'>
                    <FaRegFolderOpen className='text-[26px]'/>
                    <span className='-ml-1.5'>Courses</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
