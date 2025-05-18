import React, { useEffect, useState } from 'react'
import { AiTwotoneQuestionCircle } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../../axiosBase'



const Register = () => {
    const [errmsg,seterrmsg]=useState("");
    const [loginMessage,setloginMessage]=useState(false);
    const [success, setSuccess] = useState(false);
    const navigator=useNavigate();
    const [formData,setformData]=useState({
      "username":"",
      "email":"",
      "password":""
    })
    useEffect(() => {
      if (success) {
        setloginMessage(true);
        const timeout = setTimeout(() => {
          navigator("/home")
        }, 3000);
    
        return () => clearTimeout(timeout);
      }
    }, [success]);
    const handeleChange=(event)=>{
      setformData({
        ...formData,
        [event.target.name]:event.target.value
      })
    }
    const handleSubmit=async (event)=>{
      event.preventDefault();
      const userValue=formData.username;
      const emailValue=formData.email;
      const passwordValue=formData.password;
  
      if(!emailValue || !userValue || !passwordValue){
        alert("lease enter a value");
        return;
      }
      try {
        const {data}=await axios.post("/auth/signup",{
          username:userValue,
          email:emailValue,
          password:passwordValue
        })
        seterrmsg("")
        setSuccess(true)
        
        
        console.log(data)
      } catch (error) {
        if(error.response){
          seterrmsg(error.response.data.message)
          console.log(error.response.data)
          alert(error.response.data.msg)
        }
      }
  
    }
    return (
      <div className='bg-[#111827] h-[100vh] w-[100vw]  flex justify-center items-center'>
        <div className='flex flex-col  w-[26vw] h-[80vh] bg-[#1F2937] rounded-[10px] border-amber-50 '>
          <div className='flex flex-col justify-center items-center gap-2 mb-10'>
          <div className='text-red-600 font-semibold md:mt-3.5'>
                {errmsg && errmsg}
          </div>
            <span className='text-white md:pt-5 text-3xl'>Register</span>
            <span className='text-white text-sm'>Create Your Account</span>
          </div>
          <div className='-mt-2 flex justify-center items-center text-green-500  text-sm  font-bold'>
            {loginMessage && "successfully Registered.Redirecting to Home page"}
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <div className='flex flex-col'>
              <span className='ml-5 text-white text-sm md:mb-2'>Username</span>
              <div className='relative'>
                  <input 
                  className=' w-[300px] rounded-[6px] bg-[#374151] h-10 ml-5 pl-10 text-white placeholder-text-gray-500 placeholder:text-xs placeholder:font-bold' 
                  type="text"
                  name='username'
                  value={formData.username}
                  placeholder="Enter username"
                  onChange={handeleChange}
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
                  value={formData.email}
                  onChange={handeleChange}
                  />
                  <TfiEmail className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-500" /> 
              </div>
          </div>
          <div className='flex flex-col'>
              <span className='ml-5 text-white text-sm md:mb-2'>Password</span>
              <div className='relative'>
                  <input 
                  className='border-gray-700 ] w-[300px] rounded-[6px] bg-[#374151] h-10 ml-5 pl-10 text-white placeholder-text-gray-500 placeholder:text-xs' 
                  type="password"
                  name='password'
                  placeholder="Enter Password"
                  onChange={handeleChange}
                  value={formData.password}
                  />
                  <AiTwotoneQuestionCircle className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-500" /> 
              </div>
          </div>
  
            <button type='submit' 
              
              className='ml-5 md:mt-2 flex justify-center items-center group hover:scale-110 ease-out transition-all w-[300px] h-12 bg-gray-500 text-center  text-sm text-white font-semibold rounded-[6px]'>
              <span>Create Account</span>
            </button>
          </form>
          <Link to='/login' className='flex justify-center md:mt-2'>
            <span className='text-white text-xs underline decoration-amber-50'>Already have account. Login</span>
          </Link>
        </div>
      </div>
    )
  
}

export default Register
