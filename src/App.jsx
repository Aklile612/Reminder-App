import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import CoursesPage from './Components/CousesPage/CoursesPage'
import AssistantPage from './Components/Ai Assistant/AssistantPage'
import GetStarted from './Components/Get Started/GetStarted'
import Login from './Components/Login/Login'


function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<CoursesPage/>}/>
      <Route path='/aipage' element={<AssistantPage/>}/>
      <Route path='/getstarted' element={<GetStarted/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
