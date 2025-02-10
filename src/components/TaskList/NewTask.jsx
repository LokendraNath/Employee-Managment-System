import React from "react";
import { Flag } from "lucide-react";

const NewTask = () => {
  return (
    <div className="shrink-0 h-full w-[350px] bg-violet-600 rounded-2xl p-6">
      <h3>8 Feb 2025</h3>
      <div className="flex items-center justify-between mt-5 mb-3">
        <h1 className="text-3xl">Coding 3hr</h1>
        <Flag size={20} fill="red" />
      </div>
      <p className="text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque
        sapiente doloribus! Totam, distinctio adipisci!
      </p>
      <div className="mt-5">
        <button className="bg-green-500 py-1 px-3 rounded-2xl">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
