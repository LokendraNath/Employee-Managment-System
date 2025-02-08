// import React from "react";
import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashboard = () => {
  return (
    <div className="w-full bg-[#121026]">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
