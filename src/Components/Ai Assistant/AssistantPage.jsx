import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideBar from '../SideBar/SideBar'
import { IoIosSend } from 'react-icons/io'
import { FaCircleNotch, FaRobot } from 'react-icons/fa'

const AssistantPage = () => {
  const [responseText,setresponseText]=useState('')
  const [errmsg,seterrmsg]=useState('')
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const callGeminiApi=async()=>{
    setIsLoading(true);
    try {
      const res=await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCCVMapFDSzVrZL6LKyCqkQID_3Gv8BX-c',{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text:userInput }]
          }]
        })
      });
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      const response=await res.json()
      const texts = response?.candidates?.[0]?.content?.parts?.[0]?.text;
      setresponseText(texts)
      setIsLoading(false); 




    } catch (error) {
      console.log(object)
      seterrmsg("some thing went wrong")
    }
  }

  
  return (
    <>
    <Header/>
    <div className='flex gap-[20px] bg-[#111827]'>
      <div>
        <SideBar/>
      </div>
      <div className='md:w-[70vw]  md:min-h-[80vh] md:h-auto rounded-[3px] md:mx-[40px] md:mt-[50px] bg-[#353f4e]'>
        
        <div className='flex flex-col justify-between md:w-[55vw] md:my-4 rounded-[6px] md:min-h-[70vh] md:h-auto md:mx-[30px] bg-[#111827]'>
          <div className='md:mt-4 md:ml-3.5  flex flex-col  overflow-y-auto max-h-[500px] md:mr-[6vw]'>
            <div className='text-white self-start bg-[#353F4E] min-h-10 rounded-[5px] md:min-w-[20vw] md:pl-3 md:w-auto font-mono h-[auto]'>{userInput}</div>
            {isLoading?(<div className="text-white text-2xl p-3 self-end animate-spin"><FaCircleNotch /></div>)
            :responseText&&(

              <div className='text-white p-3 bg-[#353F4E] rounded-[4px] my-3.5  self-end max-w-[70%] font-semibold'>{responseText}</div>
  
            )}
            </div>
            
          <div className='flex md:gap-4'>
            <form className='md:mb-3'>

              <input 
                  className=' w-[46vw] rounded-[6px] bg-[#374151] md:pl-2 h-10 ml-5 text-white placeholder:text-white placeholder:text-xs placeholder:font-mono' 
                  type="text"
                  name='question'
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type Your Question Here......"
                  />
            </form>
            <button type="submit" 
              onClick={callGeminiApi} className='text-3xl flex items-center justify-center rounded-[7px] cursor-pointer text-white md:w-[40px] md:h-[40px]  bg-[#374151]'>
              <IoIosSend />
            </button>
          </div>
        </div>
      </div>
    </div>
    



    <Footer/>
    </>
  )
}

export default AssistantPage
