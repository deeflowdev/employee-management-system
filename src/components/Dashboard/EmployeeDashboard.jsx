
import Header from '../other/Header';
import TaskListNumber from '../other/TaskListNumber';
import Tasklist from '../Tasklist/TaskList';

const EmployeeDashboard = (props) => {
  // console.log(data);
  

  return (
    <div className="p-10 bg-[#fbfdff] h-screen text-[#1e293b]">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumber data={props.data} />
      <Tasklist data={props.data} />
    </div>
  );
}

export default EmployeeDashboard