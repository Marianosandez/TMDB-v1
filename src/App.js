import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./views/Main";
import SearchContext from "./context/searchContext";
import Authcontext from "./context/authContex";
import Navbar from "./views/Navbar";
import Login from "./views/LogIn";
import Register from "./views/Register";
import User from "./views/User";
import Friends from "./views/Friends";
import NotFound from "./components/NotFound";
import SingleFriend from "./views/SingleFriend";

const App = () => {
  return (
    <>
      <SearchContext>
        <Authcontext>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="user" element={<User />}></Route>
            <Route path="friends" element={<Friends />}></Route>
            <Route path="singleFriend/:id" element={<SingleFriend />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Authcontext>
      </SearchContext>
    </>
  );
};

export default App;
