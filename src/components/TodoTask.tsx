import {Task} from "../interfaces";

interface Props {
  task: Task;
  deleteTask(task: string): void;
};

const todoTask = ({task, deleteTask}: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
        <button onClick={() => {deleteTask(task.taskName)}}>x</button>
      </div>
    </div>
  )
};

export default todoTask;