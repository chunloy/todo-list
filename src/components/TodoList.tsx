import {TodoListProps} from "../interfaces"
import TodoListItem from "./TodoListItem"


const TodoList = ({todo, completeTask}: TodoListProps) => {
  const taskItems = todo.map((item, key) => {
    return (
      <TodoListItem key={key} todo={item} completeTask={completeTask} />
    );
  });

  return (
    <div>
      {taskItems}
    </div>
  )
}

export default TodoList;