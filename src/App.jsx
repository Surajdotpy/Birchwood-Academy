import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MissionVisionPage from './pages/MissionVision'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <Navbar />
    <Hero />
    <MissionVisionPage />
    <Footer />
    

    </>
  )
}

export default App
