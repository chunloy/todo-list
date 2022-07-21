import React, {useState} from 'react';
import {Task} from './interfaces';
import TodoTask from './components/TodoTask';
import './App.css';

function App() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<Task[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.name === 'task' ? setTask(e.target.value) : setDeadline(Number(e.target.value));
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
      <div className='header'>
        <form onSubmit={e => e.preventDefault()}>
          <div className='inputContainer'>
            <input 
              type="text" 
              name='task' 
              placeholder='Add a task' 
              value={task}
              onChange={handleChange}
            />
            <input 
              type="text" 
              name='deadline' 
              placeholder='Set a deadline (in days)'
              value={deadline}
              onChange={handleChange}
            />
          </div>
          <button onClick={addTask}>Add</button>
        </form>
      </div>
      <div className='todolist'>
        {taskItems}
      </div>
    </div>
  );
}

export default App;
