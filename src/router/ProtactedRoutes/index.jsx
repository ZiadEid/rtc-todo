import { Navigate } from "react-router";

const ProtectedRoutes = ({ isAllowed, redirect, children }) => {
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
    return <Navigate to={redirect} replace />;
  }
  return children;
};

export default ProtectedRoutes;
