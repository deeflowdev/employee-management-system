
const NewTask = ({data}) => {
  return (
    <div className="shrink-0 h-full w-75 rounded-xl bg-blue-50 border border-blue-100 shadow p-5">
      <div className="flex justify-between">
        <h3 className="bg-blue-100 text-blue-800 rounded-2xl text-sm px-3 py-1 font-semibold">
          {data.category}
        </h3>
        <h4 className="text-sm text-slate-500">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 mb-1 font-bold text-lg">{data.taskTitle}</h2>
      <p className="mt-2 text-sm text-slate-600 leading-6">
        {data.taskDescription}
      </p>

      <div className="mt-6">
        <button className="w-full bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all duration-200 active:scale-95 cursor-pointer">
          ✓ Accept
        </button>
      </div>
    </div>
  );
}

export default NewTask