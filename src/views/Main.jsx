import React, { useContext, useEffect }  from "react";
import Search from "../components/Search";
import Content from "../components/Content";
import { AuthContext } from "../context/authContex";
import axios from "axios";



const Body=()=>{
    const {saveUser, loggedUser}=useContext(AuthContext)
    useEffect(() => {
        axios
          .get("/me")
          .then((res) =>  res.data)
          .then((user) => {
            saveUser(user)
            
          });
      },[]);
  
    
    return(
      <div>
        <Search/>
        <Content loggedUser={loggedUser}/>
       

      </div>)
}

export default Body