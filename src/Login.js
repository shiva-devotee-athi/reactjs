import React, { useEffect,} from 'react'
// import axios from 'react'

function Login ()
{
    // const [set,HighSet]=useState('')
useEffect(()=>{
    fetch('http://localhost:3000/employee')
    .then(response =>response.json())
    .then(json =>console.log(json))
})
    return(
<div className='login'>
{/* {set} */}
</div>
    )};
export default Login