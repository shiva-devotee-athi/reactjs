import React from 'react'
import { Link } from 'react-router-dom'
export default function MenuItem() {
  return (
    <div className="menu-item">
    <ul>
     
     <li> <Link to="/veg" >Veg</Link></li>
     {/* <li> <Link to ="/products/NonVeg"onClick={()=>setFilters("Non-Veg")}>NonVeg</Link></li> */}
      {/* <li><a href="" className="menu" data-title="Juice" data-id="Juice" onClick={()=>setFilters("Juice")} >Juice</a></li>
      <li><a href="" className="menu" data-title="Cakes" data-id="Cake" onClick={()=>setFilters("Cake")} >Cakes</a></li>
      <li><a href="" className="menu" data-title="Sweets" data-id="Sweet" onClick={()=>setFilters("Sweet")}>Sweets</a></li>
      <li><a href="" className="menu" data-title="Ice Cream" data-id="IceCream" onClick={()=>setFilters("IceCream")}>Ice Cream</a></li>
      <li><a href="" className="menu" data-title="Pizza" data-id="Pizza" onClick={()=>setFilters("Pizza")}>Pizza</a></li>
      <li><a href="" className="menu" data-title="Soups" data-id="Soup" onClick={()=>setFilters("Soup")}>Soup</a></li> */}
    </ul>
  </div>
  )
}
