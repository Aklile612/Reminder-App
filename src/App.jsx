import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import CoursesPage from './Components/CousesPage/CoursesPage'
import AssistantPage from './Components/Ai Assistant/AssistantPage'


function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<CoursesPage/>}/>
      <Route path='/aipage' element={<AssistantPage/>}/>
      </Routes>
    </>
  )
}

export default App
