import React, {useState} from 'react'
export default () => {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
const submitValue = () => {
    const frmdetails = {
        'First Name' : fName,
        'Last Name' : lName,
        'Phone' : phone,
        'Email' : email
    }
    console.log(frmdetails);
}
return(
    <>
    {/* {frmdetails} */}
    <hr/>
    <input type="text" placeholder="First Name" onChange={e => setfName(e.target.value)} />
    <input type="text" placeholder="Last Name" onChange={e => setlName(e.target.value)} />
    <input type="text" placeholder="Phone" onChange={e => setPhone(e.target.value)} />
    <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
    <button onClick={submitValue}>Submit</button>
    </>
    )
}