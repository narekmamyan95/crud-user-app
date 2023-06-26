import React  from "react";
import { Routes, Route } from "react-router-dom";
// Routes
import { routes } from "../constants";
// Layout
import { AppLayout } from "../components";
// Pages
import { Home, About, CreateUser, Login, NotFound } from "../pages";
import AuthRoute from "./AuthRoute";
import NonAuthRoute from "./NonAuthRoute";





const Router = () => {
 
  return (
    <Routes>
      <Route path={routes.HOME} element={<AppLayout />}>
        <Route
          index
          element={
            <AuthRoute>
              <Home/>
            </AuthRoute>
          }
        />
        <Route
          path={routes.ABOUT}
          element={
            <AuthRoute>
              <About />
            </AuthRoute>
          }
        />
        <Route
          path={routes.CREATE_USER}
          element={
            <AuthRoute>
              <CreateUser />
            </AuthRoute>
          }
        />
      </Route>
      <Route
        path={routes.LOGIN}
        element={
          <NonAuthRoute>
            <Login />
          </NonAuthRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
