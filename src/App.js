import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import ForgetPassword from './Components/ForgetPassword/Forget';
import Register from './Components/Register/Register';
import StoreList from "./Components/Dashboard/Store/StoreList/StoreList";
import AddStore from "./Components/Dashboard/Store/AddStore/AddStore";
import UpdateStore from "./Components/Dashboard/Store/UpdateStore/UpdateStore";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgetPassword' element={<ForgetPassword />} />
        <Route path='/register' element={<Register />} />
        <Route path='/storelist' element={<StoreList />} />
        <Route path='/addstore' element={<AddStore />} />
        <Route path='/updatestore' element={<UpdateStore />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;