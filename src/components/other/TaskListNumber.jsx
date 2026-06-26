import React from "react";

const TaskListNumber = ({data}) => {
  return (
    <div className="flex flex-wrap mt-10 gap-5">
      <div className="flex-1 min-w-[220px] px-6 py-5 bg-blue-100 rounded-xl hover:bg-blue-200 shadow-sm transition-all duration-300">
        <h2 className="text-3xl font-bold text-blue-800">
          {data.taskCount.newTask}
        </h2>
        <h3 className="text-lg md:text-xl mt-3 font-medium text-blue-700">
          New Task
        </h3>
      </div>

      <div className="flex-1 min-w-[220px] px-6 py-5 bg-green-100 rounded-xl hover:bg-green-200 shadow-sm transition-all duration-300">
        <h2 className="text-3xl font-bold text-green-800">
          {data.taskCount.completed}
        </h2>
        <h3 className="text-lg md:text-xl mt-3 font-medium text-green-700">
          Completed Task
        </h3>
      </div>

      <div className="flex-1 min-w-[220px] px-6 py-5 bg-amber-100 rounded-xl hover:bg-amber-200 shadow-sm transition-all duration-300">
        <h2 className="text-3xl font-bold text-amber-800">
          {data.taskCount.active}
        </h2>
        <h3 className="text-lg md:text-xl mt-3 font-medium text-amber-700">
          Accepted Task
        </h3>
      </div>

      <div className="flex-1 min-w-[220px] px-6 py-5 bg-red-100 rounded-xl hover:bg-red-200 shadow-sm transition-all duration-300">
        <h2 className="text-3xl font-bold text-red-800">
          {data.taskCount.failed}
        </h2>
        <h3 className="text-lg md:text-xl mt-3 font-medium text-red-700">
          Failed Task
        </h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
