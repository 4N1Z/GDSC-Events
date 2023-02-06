import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Landing from './components/Landing/Landing'
import Navbar from './components/Navbar/Navbar'
import Events from './components/Events/Events'
import Home from './components/Home/Home'

function App() {

  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Landing/>
        <Events/>
        <Footer/>
      
    </div>
  )
}

export default App
