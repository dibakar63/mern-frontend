import React, { useState } from 'react'
//import './auth.css'
import Profile from './Profile'
import './profile.css'

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phoneno,setPhoneno]=useState("");
    const [dob,setDob]=useState("");
    const [active,setActive]=useState("");
     const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const res=await  axios.post('https://mern-back2.onrender.com/api/v1/auth',{name,email,dob,phoneno,active})
          if( res && res.data.success){
            toast.success(res.message)
             navigate('/profile')
          }else{
            toast.error(res.data.message)
          }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
        }
    }
  return (
    <div>
      <div className='profile'>
        <h1>Register</h1>
        
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} required/>
    
    </div>
    <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
    
    </div>
  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter your no' value={phoneno} onChange={(e)=>setPhoneno(e.target.value)} required/>
  </div>
  <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Enter your Date of birth' value={dob} onChange={(e)=>setDob(e.target.value)} required/>
    
    </div>
    <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Active?'  value={active} onChange={(e)=>setActive(e.target.value)} required />
       
    </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to='/profile' className='register-link'>Profile</Link>
</form>
</div>
      
    </div>
  )
}

export default Register
