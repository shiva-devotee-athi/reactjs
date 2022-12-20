import axios from 'axios'
import React,{useEffect, useState} from 'react'


function Gmk (){
    // const [state,setState]=useState("kumar")
    const [Emp,setEmp]=useState([])

// const update = () =>
// {
//     const waste = {"fname": Emp}
//     console.log(waste)
// }

useEffect(()=>
{
    muthu();
},[])

useEffect(()=>{
    console.log(Emp)
},[Emp])

const muthu=async()=>
{
    const kumar= await axios("http://localhost:3000/Employee")
    setEmp(kumar.data)
}
    

return(
        <div>
            {/* {Emp} */}
            {/* <input type="text" onChange={e=>setEmp(e.target.value)}></input> */}
            {/* <button onClick={update}>Update</button> */}hello
            {Emp.map((e)=>{
                return<div key={e.id}> 
                   <h1>{e.name}</h1>
                   <h1>{e.native}</h1>
                </div>
            })}
        </div>
    )
}
export default Gmk;