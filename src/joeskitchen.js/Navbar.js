import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase/firebase'

export default function Navbar({setCartOpen}) {

  const logout=()=>{
    signOut(auth)
  }
  
  return (
    <div className="navbar">
    <div className="navbar-banner">
      Joe's Kitchen
    </div>

    <div className="nav-cart" onClick={()=>setCartOpen(true)} >
      <i className="fa fa-shopping-cart" > </i>
      <div className="cart-items">0</div>
    </div>
    <div> <button className='btn-item' onClick={logout}>Log out</button></div>
    
  </div>
  )
}
