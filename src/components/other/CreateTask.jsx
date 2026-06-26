import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  // const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    
    const task = { taskTitle, taskDescription, taskDate, category, active: false, newTask:true, failed:false, completed:false };

    const updatedEmployees = userData.employees.map((employee) => {
      if (employee.name === assignTo) {
        return {
          ...employee,
          tasks: [...employee.tasks, task],
          taskCount: {
            ...employee.taskCount,
            newTask: employee.taskCount.newTask + 1,
          },
        };
      }

      return employee;
    });

    const updatedUserData = {
      ...userData,
      employees: updatedEmployees,
    };

    setUserData(updatedUserData);

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    // localStorage.setItem('employees', JSON.stringify(data))

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
    
  }

  return (
    <div className="p-8 bg-white mt-7 rounded-xl shadow-md border border-slate-200">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm font-medium text-slate-600 mb-1">
              Task Title
            </h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              type="text"
              placeholder="Design homepage banner"
              className="w-4/5 px-3 py-2 text-sm bg-white border border-slate-300 rounded-md outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-slate-600 mb-1">
              Due Date
            </h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              type="date"
              className="w-4/5 px-3 py-2 text-sm bg-white border border-slate-300 rounded-md outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-slate-600 mb-1">
              Assign To
            </h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              type="text"
              placeholder="e.g. Sarah Johnson"
              className="w-4/5 px-3 py-2 text-sm bg-white border border-slate-300 rounded-md outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-slate-600 mb-1">
              Category
            </h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              type="text"
              placeholder="Design, Development, Testing"
              className="w-4/5 px-3 py-2 text-sm bg-white border border-slate-300 rounded-md outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 mb-4"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col">
          <h3 className="text-sm font-medium text-slate-600 mb-1">
            Description
          </h3>

          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            rows="10"
            placeholder="Create a responsive homepage banner following the company's branding guidelines. Ensure the design is optimised for desktop and mobile devices."
            className="h-44 w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          ></textarea>

          <button className="w-full mt-5 bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-all duration-300 active:scale-95 shadow-sm">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
