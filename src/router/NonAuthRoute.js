import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../selectors';

// Routes
import { routes } from '../constants';

const NonAuthRoute = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated } = useSelector(selectAuth);

  if (isAuthenticated) {
    return <Navigate to={routes.HOME} state={{ from: location }} />;
  }

  return children;
};

export default NonAuthRoute;
