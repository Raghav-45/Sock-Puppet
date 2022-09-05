import React from 'react'
// import './App.css'
import Puppet from './Pages/SockPuppet'
import SeedPage from './Pages/Seed'
import Profile from './assets/Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route index element={<Puppet/>} />
        <Route path='/puppet' element={<Puppet/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/seed/:seed' element={<SeedPage/>} />
      </Routes>
    </Router>
  )
}

export default App
