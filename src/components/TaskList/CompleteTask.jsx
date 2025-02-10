import React from "react";
import { Flag } from "lucide-react";

const CompleteTask = () => {
  return (
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
      <div className="mt-3">
        <button className="w-full">Completed</button>
      </div>
    </div>
  );
};

export default CompleteTask;
