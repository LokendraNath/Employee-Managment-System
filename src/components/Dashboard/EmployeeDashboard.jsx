// import Login from "../Auth/Login";
import Header from "../other/Header";
import TaskInsights from "../other/TaskInsights";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({EmpData}) => {
  
  return (
    <div className="bg-[#121026] h-screen">
      {/* <Login /> */}
      <Header EmpData={EmpData}/>
      <TaskInsights EmpData={EmpData}/>
      <TaskList EmpData={EmpData}/>
    </div>
  );
};

export default EmployeeDashboard;
