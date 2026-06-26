import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="shrink-0 h-full w-75 rounded-xl bg-green-50 border border-green-100 shadow p-5">
      <div className="flex justify-between">
        <h3 className="bg-green-100 text-green-800 rounded-2xl text-sm px-3 py-1 font-semibold">
          {data.category}
        </h3>
        <h4 className="text-sm text-slate-500">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 mb-1 font-bold text-lg">{data.taskTitle}</h2>
      <p className="mt-2 text-sm text-slate-600 leading-6">
        {data.taskDescription}
      </p>

      <div className="mt-6">
        <button
          disabled
          className="w-full bg-emerald-100 text-emerald-700 py-2.5 rounded-xl text-sm font-semibold cursor-default border border-emerald-200"
        >
          ✓ Completed
        </button>
      </div>
    </div>
  );
}

export default CompleteTask