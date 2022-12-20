import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"

export default function Router() {
  return (
    <div>
      <Router>  
        <Routes>
        <li to="/Home">Home</li>
        <li to="/About">About</li>
        <li to="/Contact">Contact</li>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
        </Router>
    </div>
  )
}
