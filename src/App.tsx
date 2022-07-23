import React, {useState} from 'react';
import {Task} from './interfaces';
import TodoTask from './components/TodoTask';
import Form from "./components/Form"
import './App.css';

function App() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [todo, setTodo] = useState<Task[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.name === 'task' ? setTask(e.target.value) : setDeadline(e.target.value);
  };

  const addTask = () => {
    setTodo([...todo, {taskName: task, deadline: deadline}])
  }

  const deleteTask = (taskNameToDelete: string) => {
    setTodo(todo.filter((task) => {
      return task.taskName !== taskNameToDelete;
    }));
  };

  const taskItems = todo.map((item, key) => {
    return (
      <TodoTask key={key} task={item} deleteTask={deleteTask} />
    );
  });
  
  return (
    <div className="App">
      <div>
        <Form 
          task={task}
          deadline={deadline}
          handleChange={handleChange}
          addTask={addTask}
        />
      </div>
      <div className='todolist'>
        {taskItems}
      </div>
    </div>
  );
}

export default App;
