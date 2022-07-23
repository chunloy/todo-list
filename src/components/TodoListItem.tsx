import {TodoListItemProps} from "../interfaces";

const todoListItem = ({todo, completeTask}: TodoListItemProps) => {
  return (
    <div className="task">
      <div className="content">
        <span>{todo.taskName}</span>
        <span>{todo.deadline}</span>
        <button onClick={() => {completeTask(todo.taskName)}}>x</button>
      </div>
    </div>
  )
};

export default todoListItem;