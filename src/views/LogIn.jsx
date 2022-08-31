import axios from "axios";
import React, {useContext}from "react";

import { useInput } from "../utils/customHooks";
import { AuthContext } from "../context/authContex";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const navigate=useNavigate()
    const {saveUser}= useContext(AuthContext)
   

    const email= useInput('email')
    const password=useInput('password')
    
    const handleSubmit=(e)=>{
       e.preventDefault();
       axios.post('/login',{ 
        email: email.value,
        password: password.value,}).then((user)=>user.data).then((result)=>{localStorage.setItem('userData', JSON.stringify(result)); return saveUser(result) }).then(()=>alert('WELCOME')).then(()=>navigate('/'))
    }

    


    return(
        <div className="user-form">
        <p>LOGIN</p>
        <form onSubmit={handleSubmit}>
        <input className="searchBar" type='text' placeholder="email" {...email}></input>
        <input className="searchBar" type='password' placeholder="password" {...password}></input>
        <button className="button">LOG IN</button>
        </form>
        </div>
    )
}

export default Login