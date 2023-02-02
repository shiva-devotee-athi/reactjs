import React, { useState } from 'react'

function Popup() {
    const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>

        <h2>Save Segment</h2>
        <p>Enter the Name of the Segment</p>
        <input type="text" placeholder='Name of the segment'/> <br/>
        <p>To save Your Segment,You neeed to add the schemas to build the query</p> <br/>
        <input type="text" value={value}/> <br/>
        <input type="text"/> <br/>

        <select value={value} onChange={handleChange}>
            <option>Add Schema to Segment"</option>
            <option value="FirstName">First Name</option>
            <option value="LastName">Last Name</option>
            <option value="Gender">Gender</option>
            <option value="Age">Age </option>
            <option value="Account Name">Account Name</option>
            <option value="City">City</option>
            <option value="State">State</option>
        </select>
        {value}
    </div>
  )
}

export default Popup