import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import CoursesPage from './Components/CousesPage/CoursesPage'
import AssistantPage from './Components/Ai Assistant/AssistantPage'
import GetStarted from './Components/Get Started/GetStarted'
import Login from './Components/Login/Login'
import { useContext } from 'react'
import Register from './Components/Register/Register'

export const DeadlineState=createContext()
export const CalanderIdStore=createContext()
function App() {

  const [deadLine,setdeadLine]=useState(0)
  const [calanderID,setcalanderId]=useState()
  return (
    <>
    <DeadlineState.Provider value={{deadLine,setdeadLine}}>
      <CalanderIdStore.Provider value={{calanderID,setcalanderId}}>

      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/courses' element={<CoursesPage/>}/>
      <Route path='/aipage' element={<AssistantPage/>}/>
      <Route path='/' element={<GetStarted/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Routes>
      </CalanderIdStore.Provider>
    </DeadlineState.Provider>
    </>
  )
}

export default App
