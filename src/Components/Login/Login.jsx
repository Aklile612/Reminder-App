import React from 'react'
import { AiTwotoneQuestionCircle } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-[#111827] h-[100vh] w-[100vw]  flex justify-center items-center'>
      <div className='flex flex-col  w-[26vw] h-[80vh] bg-[#1F2937] rounded-[10px] border-amber-50 '>
        <div className='flex flex-col justify-center items-center gap-2 mb-10'>
          <span className='text-white md:pt-5 text-3xl'>Register</span>
          <span className='text-white text-sm'>Create Your Account</span>
        </div>

        <form className='flex flex-col gap-5'>
        <div className='flex flex-col'>
            <span className='ml-5 text-white text-sm md:mb-2'>Username</span>
            <div className='relative'>
                <input 
                className=' w-[300px] rounded-[6px] bg-[#374151] h-10 ml-5 pl-10 text-white placeholder-text-gray-500 placeholder:text-xs placeholder:font-bold' 
                type="text"
                name='username'
                placeholder="Enter username"
                />
                <FaUser className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-500" /> 
            </div>
        </div>
        <div className='flex flex-col'>
            <span className='ml-5 text-white text-sm md:mb-2'>Email</span>
            <div className='relative'>
                <input 
                className='border-gray-700  w-[300px] rounded-[6px] bg-[#374151] h-10 ml-5 pl-10 text-white placeholder-text-gray-500 placeholder:text-xs placeholder:font-bold' 
                type="email"
                name='email'
                placeholder="Enter Email"
                />
                <TfiEmail className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-500" /> 
            </div>
        </div>
        <div className='flex flex-col'>
            <span className='ml-5 text-white text-sm md:mb-2'>Password</span>
            <div className='relative'>
                <input 
                className='border-gray-700 ] w-[300px] rounded-[6px] bg-[#374151] h-10 ml-5 pl-10 text-white placeholder-text-gray-500 placeholder:text-xs' 
                type="text"
                name='password'
                placeholder="Enter Password"
                />
                <AiTwotoneQuestionCircle className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-500" /> 
            </div>
        </div>

          <Link 
            to='/'
            className='ml-5 md:mt-2 flex justify-center items-center group hover:scale-110 ease-out transition-all w-[300px] h-12 bg-gray-500 text-center  text-sm text-white font-semibold rounded-[6px]'>
            <span>Create Account</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
