import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Detail from "./Detail";
import Home from "./Home";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "./app/features/user/UserSlice";

const App = () => {
  const loggedInUserId = useSelector(selectLoggedInUser);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={!loggedInUserId ? <Login /> : <Navigate to="/detail" />}
      />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/detail"
        element={
          loggedInUserId ? <Detail /> : <Navigate to="/login" />
        }
      />
    </Routes>
  );
};
export default App;
