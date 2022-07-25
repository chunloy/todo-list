import {TodoListProps} from "../interfaces"
import TodoListItem from "./TodoListItem"

const TodoList = ({todo, completeTask}: TodoListProps) => {
  const taskItems = todo.map((item, key) => {
    return (
      <TodoListItem key={key} todo={item} completeTask={completeTask} />
    );
  });

  return (
    <div className="is-flex is-justify-content-center mt-6">
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {taskItems}
        </tbody>
      </table>
    </div>
  )
}

export default TodoList;