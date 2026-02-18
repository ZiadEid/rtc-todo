import { createContext, useEffect, useState } from "react";

export const storeContext = createContext();
const Store = ({ children }) => {
  // States
  const [loginData, setLoginData] = useState(() => JSON.parse(localStorage.getItem('auth')));

  // Vars
  const base_url = "http://localhost:1337/api";

  // Helpers
  const login = (data) => {
    setLoginData(data);
  };

  const logout = () => {
    setLoginData(null);
  };

  // Set Login Data
//   useEffect(() => {
//     const storedAuth = JSON.parse(localStorage.getItem("auth"));
//     setLoginData(storedAuth);
//   }, []);

  // Store Login Data In Localstorage
  useEffect(() => {
    console.log(loginData)
    if (loginData) {
      localStorage.setItem("auth", JSON.stringify(loginData));
    } else {
      localStorage.removeItem("auth");
    }
  }, [loginData]);

  const data = {
    base_url,
    login,
    logout,
    token: loginData?.jwt,
    userData: loginData?.user,
  };

  return <storeContext.Provider value={data}>{children}</storeContext.Provider>;
};

export default Store;
