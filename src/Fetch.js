import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './fetch.css';

function Items()
{
const [Food,setFood]=useState([])

useEffect(()=>{
  Out();
},[])

// useEffect(()=>{
//     console.log(Food);
//   },[Food])

const Out = async()=>{
    const kumar= await axios("https://www.app.tutorjoes.in/mobile/getAllFood")
    setFood(kumar.data.items)
}

    return(
        <div>
            <div className='home'>
                <div >Home</div>
                <div>About</div>
                <div>Details</div>
            </div>
            {Food.map((e)=>
            {
                return<div className="gmk">
                    <p className='id'>{e.ID}</p>
                    <p className='name'>{e.NAME}</p>
                    <p className='amt'>{e.AMT}</p>
                    <p className='shop'>{e.SHOP}</p>
                </div>
            })}                


        </div>
    )
}
export default Items