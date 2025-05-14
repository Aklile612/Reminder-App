import React from 'react'
import LandingPage from './Components/Home/LandingPage'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


const Home = () => {
  return (
    <>
     <div className="flex bg-gray-200 flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <LandingPage/>
    </main>
    <Footer />
  </div> 
    </>
  )
}

export default Home
