import React, { useState } from 'react'
// import Menuitem from './joeskitchen.js/MenuItem';
import Navbar from './joeskitchen.js/Navbar';
import Products from './joeskitchen.js/Products';
import Slider from './joeskitchen.js/Slider';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Veg from './joeskitchen.js/Veg';


function App() {
  const [filters, setFilters]= useState('')
 
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      {/* <Menuitem setFilters={setFilters}/> */}
     
      <Products filters={filters}/>
      <BrowserRouter>
      <Routes>
        <Route path='/veg' element={ <Veg setFilters={setFilters}/>}></Route>
      </Routes>
      </BrowserRouter>

      
        
        
      
</div>
      
  );
}

export default App;
