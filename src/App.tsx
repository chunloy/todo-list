import React, {useState} from 'react';
import {Task} from './interfaces';
import Form from "./components/Form"
import TodoList from './components/TodoList';
import './App.css';

const fakeData: Task[] = [
  {
    taskName: "Five on Flat for Mollie",
    deadline: "1"
  },
  {
    taskName: "Kickflip 11's for Pocket",
    deadline: "1"
  },
  {
    taskName: "Ninja Training at Poods Park",
    deadline: "2"
  },
]

function App() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [todo, setTodo] = useState(fakeData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.name === 'task' ? setTask(e.target.value) : setDeadline(e.target.value);
  };

  const addTask = () => {
    setTodo([...todo, {taskName: task, deadline: deadline}])
  }

  const completeTask = (taskNameToDelete: string) => {
    setTodo(todo.filter((task) => {
      return task.taskName !== taskNameToDelete;
    }));
  };
  
  return (
    <div className="container">
      <Form 
        task={task}
        deadline={deadline}
        handleChange={handleChange}
        addTask={addTask}
      />

      <TodoList 
        todo={todo} 
        completeTask={completeTask}
      />
    </div>
  );
}

export default App;