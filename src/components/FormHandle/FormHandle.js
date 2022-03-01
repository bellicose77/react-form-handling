import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const FormHandle = () => {
    const[name,setName]=useState('');
    const[password,setPassword]=useState('');
    const[email,setEmail]=useState('')
    const handleButton=(e)=>{
        e.preventDefault()
        const data ={
            name:name,
            password:password,
            email:email
        }
        console.log(data)

    }

    const handleName=(e)=>{
       const nameValue = e.target.value;
       //console.log(nameValue)
       setName(nameValue);
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
   
    return (
        <>
        <Form>
          <label>Name: 
              <input name="name" type="text" value={name} onChange={(e)=>handleName(e)}></input>
          </label>
          <br/>
          <label>Password: 
              <input name="password" type="text" value={password} onChange={(e)=>handlePassword(e)}></input>
          </label>
          <br/>
          <label> Email
              <input name="password" type="email" value={email} onChange={(e)=>handleEmail(e)}></input>
          </label>
          <br/>
          <button onClick={(e)=>handleButton(e)}>Submit</button>
        </Form>
        </>
    );
};

export default FormHandle;