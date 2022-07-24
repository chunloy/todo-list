import {TodoListItemProps} from "../interfaces";

const todoListItem = ({todo, completeTask}: TodoListItemProps) => {
  return (
    <tr>
      <td>{todo.taskName}</td>
      <td>{todo.deadline}</td>
      <td>
        <button onClick={() => {completeTask(todo.taskName)}}>x</button>
      </td>
    </tr>
  )
};

export default todoListItem;