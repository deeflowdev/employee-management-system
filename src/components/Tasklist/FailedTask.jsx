import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="shrink-0 h-full w-75 rounded-xl bg-red-50 border border-red-100 shadow p-5">
      <div className="flex justify-between">
        <h3 className="bg-red-100 text-red-800 rounded-2xl text-sm px-3 py-1 font-semibold">
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
          className="w-full bg-rose-100 text-rose-700 py-2.5 rounded-xl text-sm font-semibold cursor-default border border-rose-200"
        >
          ✕ Failed
        </button>
      </div>
    </div>
  );
}

export default FailedTask