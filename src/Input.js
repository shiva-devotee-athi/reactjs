
import axios from 'axios';
import React,{ useEffect, useState } from 'react';

export default function Input() {
  const [message, setMessage] = useState('');

  const [Updated, setUpdated] = useState(message);
  const [Employee,setEmployee]=useState([])

//   const Click = () => {
//     setUpdated(message);
//     }
    const Click=()=>{
        setUpdated(message)
        axios.post('http://localhost:3000/Employee',{Updated})
    }

    useEffect(()=>{

        axios.get('http://localhost:3000/Employee').then((response)=>{setEmployee(response)})
    },[])
return (
    <div>
      <input onChange={(e)=>setMessage(e.target.value)} value={message}/>

      <h1>Message: {message}</h1>

      <h1>Updated: {Updated}</h1>

      <button onClick={Click}>Update</button>
    </div>
  );
}