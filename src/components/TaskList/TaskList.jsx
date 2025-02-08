import { Flag } from "lucide-react";

const TaskList = () => {
  return (
    <div
      id="tasks"
      className="h-[55%] py-10 flex items-center justify-start gap-5 w-full rounded-2xl mt-7 px-15 overflow-x-auto [&::-webkit-scrollbar]:hidden
"
    >
      <div className="shrink-0 h-full w-[350px] bg-violet-600 rounded-2xl p-6">
        <h3>6 Feb 2025</h3>
        <div className="flex items-center justify-between mt-5 mb-3">
          <h1 className="text-3xl">Coding 3hr</h1>
          <Flag size={20} fill="red" />
        </div>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque
          sapiente doloribus! Totam, distinctio adipisci!
        </p>
      </div>
      <div className="shrink-0 h-full w-[350px] bg-green-600 rounded-2xl p-6">
        <h3>13 feb 2025</h3>
        <div className="flex items-center justify-between mt-5 mb-3">
          <h1 className="text-3xl">Go To Market</h1>
          <Flag size={20} fill="yellow" />
        </div>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque
          sapiente doloribus! Totam, distinctio adipisci!
        </p>
      </div>

      <div className="shrink-0 h-full w-[350px] bg-blue-600 rounded-2xl p-6">
        <h3>6 Feb 2025</h3>
        <div className="flex items-center justify-between mt-5 mb-3">
          <h1 className="text-3xl">Project Deliver</h1>
          <Flag size={20} fill="red" />
        </div>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque
          sapiente doloribus! Totam, distinctio adipisci!
        </p>
      </div>
      <div className="shrink-0 h-full w-[350px] bg-pink-600 rounded-2xl p-6">
        <h3>13 Feb 2025</h3>
        <div className="flex items-center justify-between mt-5 mb-3">
          <h1 className="text-3xl">Upload Video</h1>
          <Flag size={20} fill="blue" />
        </div>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque
          sapiente doloribus! Totam, distinctio adipisci!
        </p>
      </div>
      <div className="shrink-0 h-full w-[350px] bg-gray-600 rounded-2xl p-6">
        <h3>20 Feb 2025</h3>
        <div className="flex items-center justify-between mt-5 mb-3">
          <h1 className="text-3xl">Travel</h1>
          <Flag size={20} fill="yellow" />
        </div>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque
          sapiente doloribus! Totam, distinctio adipisci!
        </p>
      </div>
      <div className="shrink-0 h-full w-[350px] bg-violet-600 rounded-2xl p-6">
        <h3>22 Feb 2025</h3>
        <div className="flex items-center justify-between mt-5 mb-3">
          <h1 className="text-3xl">Movie Watch</h1>
          <Flag size={20} fill="green" />
        </div>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque
          sapiente doloribus! Totam, distinctio adipisci!
        </p>
      </div>
    </div>
  );
};

export default TaskList;
