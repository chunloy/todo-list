import {TodoListItemProps} from "../interfaces";

const todoListItem = ({todo, completeTask}: TodoListItemProps) => {
  return (
    <tr>
      <td>{todo.taskName}</td>
      <td className="has-text-centered">{todo.deadline}</td>
      <td className="has-text-centered">
        <button className="button is-danger" onClick={() => {completeTask(todo.taskName)}}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>
  )
};

export default todoListItem;