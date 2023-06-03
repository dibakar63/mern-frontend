import React, { useState } from 'react'
//import './auth.css'
import Profile from './Profile'

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Register from './Register'
import {Routes,Route} from 'react-router-dom'
const App = () => {
    
  return (
    <div>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      
      
    </div>
  )
}

export default App
