import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Auth/Home/Home';
import Navbar from './Components/Layout/Navbar/Navbar';
import Login from './Components/Auth/Login/Login';
import ForgetPassword from './Components/Auth/ForgetPassword/Forget';
import Register from './Components/Auth/Register/Register';
import StoreList from "./Components/Dashboard/Client/Store/StoreList/StoreList";
import AddStore from "./Components/Dashboard/Client/Store/AddStore/AddStore";
import UpdateStore from "./Components/Dashboard/Client/Store/UpdateStore/UpdateStore";
import StoreMenu from "./Components/Dashboard/Client/Store/StoreMenu/StoreMenu";
import UserManagementUpdateProfile from "./Components/Dashboard/Client/UserManagement/UpdateProfile/UpdateProfile";
import UserManagement from "./Components/Dashboard/Client/UserManagement/Management/Management";
import ShiftReport from "./Components/Dashboard/Client/Reports/ShiftReport";
import OnSlotReports from "./Components/Dashboard/Client/Reports/OnSlotReports";
import BackOfficeReport from "./Components/Dashboard/Client/Reports/BackOfficeReport";
import ReturnsReport from "./Components/Dashboard/Client/Reports/ReturnsReport";
import SalesPayoutReport from "./Components/Dashboard/Client/Reports/SalesPayoutReport";

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
        {/* <Route path='/storemenu' element={<StoreMenu />} /> */}
        <Route path='/updateprofile' element={<UserManagementUpdateProfile />} />
        <Route path='/usermanagement' element={<UserManagement />} />
        <Route path='/shiftreport' element={<ShiftReport />} />
        <Route path='/onslotreports' element={<OnSlotReports />} />
        <Route path='/backofficereports' element={<BackOfficeReport />} />
        <Route path='/returnsreport' element={<ReturnsReport />} />
        <Route path='/salesreport' element={<SalesPayoutReport />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;