import React from 'react'
import { FaGraduationCap, FaRobot } from 'react-icons/fa'
import { MdHome } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

const SideBar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: <MdHome className='text-2xl text-white' />, path: '/' },
    { name: 'Courses', icon: <FaGraduationCap className='text-2xl text-white' />, path: '/courses' },
    { name: 'AI Assistant', icon: <FaRobot className='text-2xl text-white' />, path: '/aipage' }
  ];

  return (
    <div className='w-[250px] md:mt-1.5 h-[91vh] bg-[#1F2937]'>
      <div className='pt-5 flex flex-col md:gap-4'>
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex md:gap-1.5 md:ml-3 h-10 w-[200px] md:pl-4 items-center rounded-[10px] group hover:scale-105 transition-all 
              ${location.pathname === item.path ? 'bg-gray-400 ' : 'hover:bg-gray-600'}`}
          >
            {item.icon}
            <span className='text-white font-bold'>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideBar;
