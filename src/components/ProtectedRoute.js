import React, {useEffect} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Loader from "./UI/AppLoader/Loader";
import {checkUserAuth} from "../services/actions/auth";
import PropTypes from "prop-types";

const ProtectedRoute = ({ element }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user, isAuthChecked } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(checkUserAuth());
  }, [dispatch]);

  if (!isAuthChecked) {
    return <Loader size='large' />
  }

  if (!user) {
    return <Navigate to="/login" state={ { from: location } }  replace/>;
  }

  return <>{element}</>;
};

ProtectedRoute.propType = {
  element: PropTypes.node.isRequired
}


export default ProtectedRoute;