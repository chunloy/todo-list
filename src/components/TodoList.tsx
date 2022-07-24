import {TodoListProps} from "../interfaces"
import TodoListItem from "./TodoListItem"


const TodoList = ({todo, completeTask}: TodoListProps) => {
  const taskItems = todo.map((item, key) => {
    return (
      <TodoListItem key={key} todo={item} completeTask={completeTask} />
    );
  });

  return (
    <table>
      <thead>
        <th>Task</th>
        <th>Deadline</th>
        <th>Actions</th>
      </thead>

      <tbody>
        {taskItems}
      </tbody>
    </table>
  )
}

export default TodoList;