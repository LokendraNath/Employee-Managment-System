import React from 'react'
import { Flag } from 'lucide-react'

const FailedTask = ({taskData}) => {
  return (
    <div className="shrink-0 h-full w-[350px] bg-green-600 rounded-2xl p-6">
        <h3>{taskData.taskDate}</h3>
        <div className="flex items-center justify-between mt-5 mb-3">
          <h1 className="text-3xl">{taskData.taskTitle}</h1>
          <p className="bg-red-500 py-1 px-2 rounded-xl">{taskData.category}</p>
        </div>
        <p className="text-base">
        {taskData.taskDescription}
        </p>
        <div className="mt-2">
          <button className='w-full'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask