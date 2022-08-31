import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContex";
import { useInput } from "../utils/customHooks";



const Friends=()=>{
    const friendEmail=useInput('friendEmail')
    const [friends,setFriends]=useState()
    const {loggedUser}=useContext(AuthContext)
    const currentId=loggedUser.id
    const navigate=useNavigate()


    const searchFriend=(e)=>{
        e.preventDefault()
        axios.get('/friends',{params:{email:friendEmail.value, id:currentId}}).then((result)=>{setFriends(result.data)})

    }

    const seeFriend=(id)=>{
        navigate(`/singleFriend/${id}`)
    }


 return (
    (loggedUser.id? 
        (!friends?
         <form className="user-form" style={{marginTop:'-10%'}} onSubmit={searchFriend}>
             <input className="searchBar" type="text" placeholder='enter search term' {...friendEmail} ></input>
             <button className="button" >Find friends!</button>
         </form> :
         <div>
            <h2 style={{marginTop:'25%'}}>These are people we found:</h2>
            <ul>
                {friends.map((friend)=>{
                    return(
                        <li key={friend.id} id={friend.id}>
                          { `Nombre : ${friend.username}`}
                     
                            <button key={friend.id} onClick={()=>seeFriend(friend.id)}>{friend.email}</button>
                        </li>
                    )
                })}
            </ul>
         </div>
         ):
         <h2 style={{ textAlign: 'center',
            marginTop:'20%'}}>Please log in </h2>
    )
    

    
 )
}

export default Friends
// const navigate=useNavigate()
// const {saveUser}= useContext(AuthContext)

// const email= useInput('email')
// const password=useInput('password')

// const handleSubmit=(e)=>{
//    e.preventDefault();
//    axios.post('/login',{ 
//     email: email.value,
//     password: password.value,}).then((user)=>user.data).then((result)=>saveUser(result)).then(()=>alert('WELCOME')).then(()=>navigate('/'))
// }




// return(
//     <div className="user-form">
//     <p>LOGIN</p>
//     <form onSubmit={handleSubmit}>
//     <input className="searchBar" type='text' placeholder="email" {...email}></input>
//     <input className="searchBar" type='password' placeholder="password" {...password}></input>
//     <button className="button">LOG IN</button>
//     </form>
//     </div>