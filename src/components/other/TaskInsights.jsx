import PropTypes from "prop-types";

const TaskInsights = ({ EmpData }) => {
  return (
    <div className="flex justify-between gap-5 mt-10 px-20">
      <div className="Ins-div bg-blue-600">
        <h1 className="Ins-h1">{EmpData.taskNumbers.newTask}</h1>
        <h2 className="Ins-h2">New Tasks</h2>
      </div>
      <div className="Ins-div bg-green-600">
        <h1 className="Ins-h1">{EmpData.taskNumbers.completed}</h1>
        <h2 className="Ins-h2">Completed</h2>
      </div>
      <div className="Ins-div bg-yellow-500">
        <h1 className="Ins-h1">{EmpData.taskNumbers.active}</h1>
        <h2 className="Ins-h2">active</h2>
      </div>
      <div className="Ins-div bg-red-600">
        <h1 className="Ins-h1">{EmpData.taskNumbers.failed}</h1>
        <h2 className="Ins-h2">failed</h2>
      </div>
    </div>
  );
};

TaskInsights.prototype = {
  EmpData: PropTypes.object.isRequired,
};

export default TaskInsights;
