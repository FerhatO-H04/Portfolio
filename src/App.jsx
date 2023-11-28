import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { LandingPage } from "./pages/LandingPage"
import { LayoutBase } from './pages/LayoutBase'
import { About } from './pages/About/about'
import { Projects} from "./pages/Projects/projects"
import{ Contact } from "./pages/Contact/contact"

import { 
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom'


function App() {
  

  return (
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutBase />}>
          <Route index element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path = '/projects' element = {<Projects/>}/>
          <Route path = '/contact' element = {<Contact/>} />
          

         
        </Route>
      </Routes>
  </BrowserRouter>
    
  )
}

export default App


