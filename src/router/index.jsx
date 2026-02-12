import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoutes from "./ProtactedRoutes";

const Router = () => {
  // Vars
  const token = localStorage.getItem("token");
  const userData = JSON.parse(localStorage.getItem("userData"))
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <ProtectedRoutes isAllowed={token} redirect="/login" userData={userData}>
                <Home />
              </ProtectedRoutes>
            }
          />

          <Route
            path="login"
            element={
              <ProtectedRoutes isAllowed={!token} redirect="/" userData={userData}>
                <Login />
              </ProtectedRoutes>
            }
          />
          <Route
            path="register"
            element={
              <ProtectedRoutes isAllowed={!token} redirect="/" userData={userData}>
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
