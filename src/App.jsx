import { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if(loggedInUser){
      console.log("user Logged In")
    }
  
  }, [])
  

  const handleLogin = (email, password) => {
    if (
      authData.admin.find((e) => e.email == email && e.password == password)
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email == email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user 
        ? (<Login handleLogin={handleLogin} />) 
        : user === "admin" 
          ? (<AdminDashboard />) 
          : (<EmployeeDashboard EmpData={loggedInUserData} />
      )}
    </>
  );
};

export default App;
