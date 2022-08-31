import axios from "axios";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SingleFriend=()=>{
   const friendId= useLocation().pathname.slice(14)
    console.log(friendId)
   
return <p>HOLA</p>
}

export default SingleFriend


