import React,{useState} from'react'

function App(){
const [count,setCount]=useState(0)

  const increment=()=>{
    setCount(count+1)
  }
  const Decrement=()=>{
    setCount(count-1)
  }
  const reseet=()=>{
    setCount(0)
  }
  return(
  <div>
    {count}
    <button onClick={increment}>+</button>
    <button onClick={Decrement}>-</button>
    <button onClick={reseet}>reset</button>
  </div>
  )
}

export default App