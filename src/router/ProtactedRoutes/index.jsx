import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";

const ProtectedRoutes = ({ isAllowed, redirect, userData, children }) => {
  // const navigate = useNavigate()
  // useEffect(() => {
  //   if (!isAllowed) {
  //     navigate(redirect, {
  //       replace: true,
  //       state: "Ziad Eid"
  //     })
  //   }
  // }, [])
  if (!isAllowed) {
    return <Navigate to={redirect} replace state={userData} />;
  }
  return children;
};

export default ProtectedRoutes;

function calc(num1, num2) {
  if (!num1 || !num2) {
    return;
  }
  return num1 + num2;
}
