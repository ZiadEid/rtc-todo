import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoutes from "./ProtactedRoutes";
import { useContext } from "react";
import { storeContext } from "../context/Store";
import Profile from "../pages/Profile";

const Router = () => {
  // Vars
  const { token } = useContext(storeContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <ProtectedRoutes isAllowed={token} redirect="/login">
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoutes isAllowed={token} redirect="/login">
                <Profile />
              </ProtectedRoutes>
            }
          />
          <Route
            path="login"
            element={
              <ProtectedRoutes isAllowed={!token} redirect="/">
                <Login />
              </ProtectedRoutes>
            }
          />
          <Route
            path="register"
            element={
              <ProtectedRoutes isAllowed={!token} redirect="/">
                <Register />
              </ProtectedRoutes>
            }
          />
        </Route>
        <Route path="*" element={<h1>Page not found | 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
