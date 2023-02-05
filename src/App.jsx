import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Landing from './components/Landing/Landing'
import Navbar from './components/Navbar/Navbar'
import Events from './components/Events/Events'

function App() {

  return (
    <div className="App">
        <Navbar/>
        <Landing/>
        <Events/>
        <Footer/>
      
    </div>
  )
}

export default App
