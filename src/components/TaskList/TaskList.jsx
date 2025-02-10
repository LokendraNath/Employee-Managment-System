import { Flag, Heading1 } from "lucide-react";
import AcceptTask from "./AcceptTask";
import NewList from "./NewTask";
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
      {EmpData.tasks.map((task) => {
        if(task.active){
          return <AcceptTask taskData={task}/>
        }
        if(task.completed){
          return <CompleteTask taskData={task}/>
        }
        if(task.failed){
          return <FailedTask taskData={task}/>
        }
        if(task.newTask){
          return <NewTask taskData={task}/>
        }
      })}
    </div>
  );
};

export default TaskList;
