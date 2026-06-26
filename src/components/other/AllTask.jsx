import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const columns = [
    {
      title: "New",
      key: "newTask",
      bg: "bg-blue-50",
      border: "border-blue-200",
      badge: "bg-blue-100 text-blue-700",
    },
    {
      title: "Active",
      key: "active",
      bg: "bg-amber-50",
      border: "border-amber-200",
      badge: "bg-amber-100 text-amber-700",
    },
    {
      title: "Completed",
      key: "completed",
      bg: "bg-green-50",
      border: "border-green-200",
      badge: "bg-green-100 text-green-700",
    },
    {
      title: "Failed",
      key: "failed",
      bg: "bg-red-50",
      border: "border-red-200",
      badge: "bg-red-100 text-red-700",
    },
  ];

  const employees = userData.employees;

  return (
    <div className="mt-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Employee Task Board
        </h2>
        <p className="text-slate-500 mt-1">
          Track every employee task by its current status.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {columns.map((column) => (
          <div
            key={column.key}
            className={`${column.bg} ${column.border} border rounded-2xl p-4`}
          >
            {/* Column Header */}
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-lg text-slate-800">
                {column.title}
              </h3>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${column.badge}`}
              >
                {employees.reduce((count, employee) => {
                  return (
                    count +
                    employee.tasks.filter((task) => task[column.key]).length
                  );
                }, 0)}
              </span>
            </div>

            {/* Cards */}
            <div className="kanban-scroll space-y-4 max-h-[500px] overflow-y-auto pr-1">
              {employees.map((employee) =>
                employee.tasks.map((task, index) => {
                  if (!task[column.key]) return null;

                  return (
                    <div
                      key={`${employee.id}-${index}`}
                      className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-slate-800">
                          {employee.name}
                        </p>

                        <span
                          className={`px-2 py-1 rounded-full text-[11px] font-medium ${column.badge}`}
                        >
                          {task.category}
                        </span>
                      </div>

                      <h4 className="mt-3 text-lg font-bold text-slate-900">
                        {task.taskTitle}
                      </h4>

                      <p className="mt-2 text-sm text-slate-600 leading-6">
                        {task.taskDescription}
                      </p>

                      <div className="mt-5 flex justify-between items-center">
                        <span className="text-xs text-slate-500">
                          📅 {task.taskDate}
                        </span>

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${column.badge}`}
                        >
                          {column.title}
                        </span>
                      </div>
                    </div>
                  );
                }),
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
