import { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email === "admin@123" && password === "123") {
      setUser("admin");
    } else if (email === "user@123" && password === "123") {
      setUser("employee");
    } else {
      alert("Invalid Credentials");
    }
  };

  const data = useContext(AuthContext);
  console.log(data);

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </>
  );
};

export default App;
