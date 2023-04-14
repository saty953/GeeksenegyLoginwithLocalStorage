import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fetchdetails from "./Components/Fetchdetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={    <Login />}/>
          <Route path="/fetchdetails" element={    <Fetchdetails />}/>
          <Route path="/signup" element={    <Signup />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
