import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Navbar from './navbar.jsx'
import Project from './components/Project.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Involve from './components/Involve.jsx'


function App() {
  return (
    <div>
      <Navbar />
    <div id = 'bg-1'>

      <Home id = 'home'/>
      <About id ='about'/>
      <Involve id ='portfolio'/>
      <Project id ='projects'/>
    
      
    </div>
    </div>
  )
}

export default App
