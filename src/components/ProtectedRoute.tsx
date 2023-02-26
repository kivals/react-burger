import React, {FC, useEffect} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Loader from "./UI/AppLoader/Loader";
import {checkUserAuth} from "../services/actions/auth";
import {IState} from "../utils/types";

interface IProtectedRouteProps {
  element: React.ReactNode
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ element }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user, isAuthChecked } = useSelector((state: IState) => state.auth);

  useEffect(() => {
    // @ts-ignore
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

export default ProtectedRoute;