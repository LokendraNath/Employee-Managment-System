// import Login from "../Auth/Login";
import Header from "../other/Header";
import TaskInsights from "../other/TaskInsights";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="bg-[#121026] h-screen">
      {/* <Login /> */}
      <Header />
      <TaskInsights />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
