import React, { createContext, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const data = getLocalStorage();
  console.log(data);

  return (
    <AuthContext.Provider value={"Lokendra"}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
