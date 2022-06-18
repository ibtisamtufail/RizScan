import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Auth/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Auth/Login/Login';
import ForgetPassword from './Components/Auth/ForgetPassword/Forget';
import Register from './Components/Auth/Register/Register';
import StoreList from "./Components/Dashboard/Store/StoreList/StoreList";
import AddStore from "./Components/Dashboard/Store/AddStore/AddStore";
import UpdateStore from "./Components/Dashboard/Store/UpdateStore/UpdateStore";
import StoreMenu from "./Components/Dashboard/Store/StoreMenu/StoreMenu";
import UserManagementUpdateProfile from "./Components/Dashboard/UserManagement/UpdateProfile/UpdateProfile";
import UserManagement from "./Components/Dashboard/UserManagement/Management/Management";

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
        <Route path='/storemenu' element={<StoreMenu />} />
        <Route path='/updateprofile' element={<UserManagementUpdateProfile />} />
        <Route path='/usermanagement' element={<UserManagement />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;