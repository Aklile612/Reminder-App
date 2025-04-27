import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className='flex flex-col h-[100vh]'>
      <Header/>
      <Home/>
      <div className=''>
        <Footer/>
      </div>

    </div>
  )
}

export default App
