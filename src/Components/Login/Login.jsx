import React from 'react'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-[#1F2937] h-[100vh] w-[100vw] flex justify-center items-center'>
      <div className='flex flex-col  w-[26vw] h-[70vh] border-amber-50 border-2'>
        <div className='flex flex-col justify-center items-center gap-3 mb-10'>
          <span className='text-white md:pt-5 text-3xl'>Register</span>
          <span className='text-white text-sm'>Create Your Account</span>
        </div>

        <form className='flex flex-col gap-5'>
        <div className='flex flex-col'>
            <span className='ml-5 text-white text-sm md:mb-2'>Username</span>
            <div className='relative'>
                <input 
                className='border-gray-700 border-[1px] w-[300px] h-10 ml-5 pl-10 text-white placeholder-text-gray-500 placeholder:text-xs' 
                type="email"
                name='email'
                placeholder="Enter username"
                />
                <FaUser className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-500" /> 
            </div>
        </div>
          <div>
            <input 
              className='border-gray-700 border-[1px] w-[500px] h-10 pl-4 pt-2'
              type="email"
              name='email'
              placeholder='Email address'
            />
          </div>

          <div>
            <input 
              className='border-gray-700 border-[1px] w-[500px] h-10 pl-4 pt-2'
              type="password"
              placeholder='Password'
            />
          </div>

          <Link 
            to='/'
            className='ml-50 group hover:scale-110 ease-out transition-all w-[80px] h-12 bg-red-600 text-center pt-3 text-sm text-white font-semibold'>
            <span>LOGIN</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
