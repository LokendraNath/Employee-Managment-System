import PropTypes from "prop-types";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ EmpData }) => {
  console.log(EmpData);
  return (
    <div
      id="tasks"
      className="h-[55%] py-10 flex items-center justify-start gap-5 w-full rounded-2xl mt-7 px-15 overflow-x-auto [&::-webkit-scrollbar]:hidden
"
    >
      {EmpData.tasks.map((task, id) => {
        if (task.active) {
          return <AcceptTask taskData={task} key={id} />;
        }
        if (task.completed) {
          return <CompleteTask taskData={task} key={id} />;
        }
        if (task.failed) {
          return <FailedTask taskData={task} key={id} />;
        }
        if (task.newTask) {
          return <NewTask taskData={task} key={id} />;
        }
      })}
    </div>
  );
};


export default TaskList;
