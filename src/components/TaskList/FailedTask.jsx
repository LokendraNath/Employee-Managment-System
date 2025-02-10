import React from 'react'
import { Flag } from 'lucide-react'

const FailedTask = () => {
  return (
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
        <div className="mt-2">
          <button className='w-full'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask