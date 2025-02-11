import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="mt-15 pb-10 px-20">
      <h1 className="text-center mb-10 text-5xl">Employee Dashboard</h1>
      <div className="border border-gray-200 rounded-3xl overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-[#231e53] text-3xl">
              <th className="py-4 px-5 border-b">Employee Name</th>
              <th className="py-4 px-5 border-b">New Task</th>
              <th className="py-4 px-5 border-b">Active Task</th>
              <th className="py-4 px-5 border-b">Completed</th>
              <th className="py-4 px-5 border-b">Failed</th>
            </tr>
          </thead>
          <tbody>
            {authData.employees.map((emp, index) => (
              <tr
                key={index}
                className="text-center border-t text-2xl bg-[#231f3f]"
              >
                <td className="py-3 px-5">{emp.firstName}</td>
                <td className="py-3 px-5 text-blue-500">
                  {emp.taskNumbers.newTask}
                </td>
                <td className="py-3 px-5 text-yellow-500">
                  {emp.taskNumbers.active}
                </td>
                <td className="py-3 px-5 text-green-500">
                  {emp.taskNumbers.completed}
                </td>
                <td className="py-3 px-5 text-red-500">
                  {emp.taskNumbers.failed}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTask;
