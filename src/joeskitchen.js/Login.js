import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { signInWithGoogle } from "../firebase/firebase";
function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  return (
    <div>
    <div>
      <input className='email' type='text' placeholder='E-Mail' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
      <input className='password' type='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
      <button className='btn-item' onClick={signInWithEmailAndPassword}>Login</button>
      <button className="btn-item" onClick={signInWithGoogle}> Google </button>
      </div>
    </div>
  )
}

export default Login