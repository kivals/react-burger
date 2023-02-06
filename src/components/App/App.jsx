import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "../../pages/Auth/Login/LoginPage";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import RegisterPage from "../../pages/Auth/Register/RegisterPage";
import ProfilePage from "../../pages/Profile/ProfilePage";
import ProfileOrders from "../Profile/ProfileOrders/ProfileOrders";
import ProfileOrderDetails from "../Profile/ProfileOrderDetails/ProfileOrderDetails";
import ForgotPassword from "../../pages/Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "../../pages/Auth/ResetPassword/ResetPassword";
import IngredientDetailsPage from "../../pages/IngredientDetails/IngredientDetailsPage";
import ProtectedRoute from "../ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<ProtectedRoute element={<ProfilePage />}/>} />
          <Route path="/profile/orders" element={<ProfileOrders />} />
          <Route path="/profile/orders/:id" element={<ProfileOrderDetails />} />
          <Route path="/ingredient/:id" element={<IngredientDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
