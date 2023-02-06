import React, {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../services/actions/auth";
import Loader from "./UI/AppLoader/Loader";

const ProtectedRoute = ({ element }) => {
  const dispatch = useDispatch();
  const { isAuth, errorMessage } = useSelector(state => state.auth);
  const [isUserLoaded, setUserLoaded] = useState(false);

  useEffect( () => {
    if (!isAuth) {
      dispatch(getProfile());
    } else {
      setUserLoaded(true);
    }

  }, [isAuth, dispatch]);

  if (!isUserLoaded && !errorMessage) {
    return <Loader size='large' />
  } else {
    return !errorMessage ? element : <Navigate to="/login" replace/>;
  }
};

export default ProtectedRoute;