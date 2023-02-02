import React, { useState } from 'react'
import Popup from '../Task/Popup'

function Segment() {
  const [Display,setDisplay]=useState(false)
  const showDisplay=()=>{
  setDisplay(true)
  }
  return (
    <div>
      <h2>View Audience</h2>
      <button onClick={showDisplay}>Save Segment</button>
      {Display?<Popup/>:<></>}
    </div>
  )
}
export default Segment