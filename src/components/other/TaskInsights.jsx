const TaskInsights = () => {
  return (
    <div className="flex justify-between gap-5 mt-10 px-20">
      <div className="Ins-div bg-blue-600">
        <h1 className="Ins-h1">0</h1>
        <h2 className="Ins-h2">New Tasks</h2>
      </div>
      <div className="Ins-div bg-green-600">
        <h1 className="Ins-h1">0</h1>
        <h2 className="Ins-h2">Completed</h2>
      </div>
      <div className="Ins-div bg-yellow-500">
        <h1 className="Ins-h1">0</h1>
        <h2 className="Ins-h2">Accepted</h2>
      </div>
      <div className="Ins-div bg-red-600">
        <h1 className="Ins-h1">0</h1>
        <h2 className="Ins-h2">failed</h2>
      </div>
    </div>
  );
};

export default TaskInsights;
