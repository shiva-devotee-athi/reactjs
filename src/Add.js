import React,{useState} from 'react'

function Add()
{
    const [Num1,setNum1]=useState(0)
    const [Num2,setNum2]=useState(0)
    const [Result,setResult]=useState()

    const clickme =()=>
    {
        setResult (Num1+Num2);
    }

    return(
        <div>
            <input type="number" onChange={(e)=>setNum1(parseInt(e.target.value))} ></input>
            <input type="number" onChange={(e)=>setNum2(parseInt(e.target.value))} ></input>
            <button onClick={clickme}>CLICK ME</button>
            {Result}
        </div>
    )
}

export default Add