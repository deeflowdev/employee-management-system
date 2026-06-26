
const AcceptTask = ({data}) => {
  return (
    <div className="shrink-0 h-full w-75 rounded-xl bg-amber-50 border border-amber-100 shadow p-5">
      <div className="flex justify-between">
        <h3 className="bg-amber-100 text-amber-800 rounded-2xl text-sm px-3 py-1 font-semibold">
          {data.category}
        </h3>
        <h4 className="text-sm text-slate-500">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 mb-1 font-bold text-lg">{data.taskTitle}</h2>
      <p className="mt-2 text-sm text-slate-600 leading-6">
        {data.taskDescription}
      </p>

      <div className="flex gap-3 mt-6">
        <button className="flex-1 bg-emerald-500 text-white py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:bg-emerald-600 hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer">
          Complete
        </button>

        <button className="flex-1 bg-white border border-rose-200 text-rose-600 py-2.5 rounded-xl text-sm font-semibold hover:bg-rose-50 hover:border-rose-300 transition-all duration-200 active:scale-95 cursor-pointer">
          Fail
        </button>
      </div>
    </div>
  );
}

export default AcceptTask