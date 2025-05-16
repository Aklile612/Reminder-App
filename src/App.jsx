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

export const DeadlineState=createContext()
function App() {

  const [deadLine,setdeadLine]=useState()
  return (
    <>
    <DeadlineState.Provider value={{deadLine,setdeadLine}}>

      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/courses' element={<CoursesPage/>}/>
      <Route path='/aipage' element={<AssistantPage/>}/>
      <Route path='/' element={<GetStarted/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </DeadlineState.Provider>
    </>
  )
}

export default App
