import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './profile.css'
//import './Tournament.css'
//import Tournament from './Tournamnet';


const URL='https://mern-back2.onrender.com/api/v1/auth'
const fetchHandler=async()=>{
   return await axios.get(URL).then((res)=>res.data);
}
const Profile = () => {
    const [users,setUsers]=useState('');
    useEffect(()=>{
       fetchHandler().then((data)=>setUsers(data.users));
       console.log(users);
    },[])
  return (
    <div>
      <div className='profile'>{users && users.map((user,i)=>
      <table border={1}>
       <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>DOB</th>
        <th>isActive</th>
        <th>CreatedAt</th>
        </tr>
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phoneno}</td>
          <td>{user.dob}</td>
          <td>{user.isActive}</td>
          <td>{user.date}</td>
        </tr>
        </table>

      )}</div>
    </div>
  )
}

export default Profile