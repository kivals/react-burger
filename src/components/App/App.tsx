import React, {FC} from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import LoginPage from "../../pages/Auth/Login/LoginPage";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import RegisterPage from "../../pages/Auth/Register/RegisterPage";
import ProfilePage from "../../pages/Profile/ProfilePage";
import ProfileOrders from "../Profile/ProfileOrders/ProfileOrders";
import ProfileOrderDetails from "../Profile/ProfileOrderDetails/ProfileOrderDetails";
import ForgotPassword from "../../pages/Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "../../pages/Auth/ResetPassword/ResetPassword";
import ProtectedRoute from "../ProtectedRoute";
import IngredientDetails from "../Ingredients/IngredientDetails/IngredientDetails";
import Modal from "../UI/Modal/Modal";
import OrderList from "../../pages/OrderList/OrderList";

const App: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const background = location.state && location.state.background;

  return (
    <div>
      <Routes location={background || location}>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<OrderList />} />
          <Route path="/ingredients/:id" element={ <IngredientDetails />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<ProtectedRoute element={<ProfilePage />}/>} />
          <Route path="/profile/orders" element={<ProtectedRoute element={<ProfileOrders />}/>} />
          <Route path="/profile/orders/:id" element={<ProtectedRoute element={<ProfileOrderDetails />}/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/ingredients/:id" element={
              <Modal title="Детали ингредиента" onClose={() => navigate("/")}>
                <IngredientDetails />
              </Modal>
            } />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
