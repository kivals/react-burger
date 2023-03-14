import React, {FC, useEffect} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import Loader from "./UI/AppLoader/Loader";
import {checkUserAuth} from "../services/actions/auth";
import {useDispatch, useSelector} from "../services/hooks";

interface IProtectedRouteProps {
  element: React.ReactNode
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ element }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user, isAuthChecked } = useSelector((state) => state.auth);

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

export default ProtectedRoute;