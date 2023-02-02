import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Sample from './Sample'
import Textbox from './Textbox'

export default function Router() {
  return (
    <>
        <ul>
            <li> <Link to="/">Sample</Link></li>
            <li> <Link to ="/Textbox">textbox</Link></li>
        </ul>
        <Routes>
            <Route path="/" element={<Sample/>}/>      
            <Route path="/Textbox" element={<Textbox/>}/>      
        </Routes>
    </>
  )
}
