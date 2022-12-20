import React,{useState} from 'react'

function Employee()
{
    const [EmpId,setEmpId] = useState(1)
    const [EmpName,setEmpName] = useState('Kumar')
    const [EmpNative,setEmpNative] = useState('Watrap')
    const [EmpSalary,setEmpSalary] = useState(10000)

    const [EmpId1,setEmpId1] = useState(1)
    const [EmpName1,setEmpName1] = useState(EmpName)
    const [EmpNative1,setEmpNative1] = useState(EmpNative)
    const [EmpSalary1,setEmpSalary1] = useState(EmpSalary)

    const Submit =()=>
    {
      setEmpId1(EmpId);
      setEmpName1(EmpName);
      setEmpNative1(EmpNative);
      setEmpSalary1(EmpSalary);

    }
    return(
        <div>
            <p>{EmpId1}</p>
            <p>{EmpName1}</p>
            <p>{EmpNative1}</p> 
            <p>{EmpSalary1}</p>

            <form><input type={"input"} placeholder="empId" onChange={(e)=>setEmpId(e.target.value)}></input></form>
            <form><input type={"input"} placeholder="Name" onChange={(e)=>setEmpName(e.target.value)} ></input></form>
            <form><input type={"input"} placeholder="Native" onChange={(e)=>setEmpNative(e.target.value)}></input></form>
            <form><input type={"input"} placeholder="Salary" onChange={(e)=>setEmpSalary(e.target.value)}></input></form>

            <button onClick={Submit}> Submit</button>
        </div>
    )
}

export default Employee