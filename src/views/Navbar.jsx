import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContex";
import { SearchContext } from "../context/searchContext";
import {BiHomeCircle, BiUser} from'react-icons/bi'

const Navbar=()=>{
    const {loggedUser, setLoggedUser}=useContext(AuthContext)
    const userData=JSON.parse( localStorage.getItem('userData'))
    const[logged,setLogged]=useState(false)
    const {setActiveSearch}= useContext(SearchContext)
   const navigate=useNavigate()
  
   console.log(userData)
    const handleLogOut=()=>{
        axios.post('/logout')
        .then(()=>({})).then(()=> alert('GOODBYE')).then(()=>setLogged(!logged))
        .catch((err)=>console.log(err.response.data))
    }
    const returnMain=()=>{
        setActiveSearch(false)
        navigate('/')
        window.location.reload()
      

    }



    return(
    <div className="navbar" >
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" style={{width:"20%"}} alt="" />
        <button className='button' onClick={returnMain}><BiHomeCircle/></button>
        <Link to="/friends"><button className="button">Find friends!</button></Link>   
        {loggedUser.id?
        <div>
            <Link to="/user">
            <button className='button'><BiUser/></button></Link>     
            <button  className='button' onClick={handleLogOut}>Log Out</button> </div> 
            :
            <div >
            <Link to="/login">
            <button className="button" style={{float:"right"}}>Log in</button></Link>
            <Link to="/register">
            <button className="button" style={{float:"right"}}>Register</button></Link></div>
        }
        
    </div>)
 

}



export default Navbar