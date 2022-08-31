import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../utils/customHooks";


const Register=()=>{
    const navigate=useNavigate()
    const email = useInput("email");
    const password = useInput("password");
    const username = useInput("username");

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("/register", {
            username:username.value,
            email: email.value,
            password: password.value,
          }).then(alert('USER CREATED SUCCESFULLY')).then(()=>navigate('/'))
    }
   
    return(
        <div className="user-form">
            <p>CREATE YOUR USER</p>
            <form onSubmit={handleSubmit}>           
                <input className="searchBar" type='text' placeholder="username" {...username}></input>
                <input className="searchBar" type='text' placeholder="ingrese su email" {...email}></input>
                <input className="searchBar" type='password' placeholder="ingrese su password"{...password}></input>
            <button className="button">Create User</button>
            </form>
        </div>
    )
}

export default Register