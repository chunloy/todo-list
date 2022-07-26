import {useState} from 'react';
import {Task, AddTask, CompleteTask, HandleChange} from './interfaces';
import Header from './components/Header';
import Form from "./components/Form"
import TodoList from './components/TodoList';
import './App.css';
import { fakeData } from './fakeData';

function App() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [todo, setTodo] = useState<Task[]>(fakeData);

  const handleChange: HandleChange = (e) => {
    e.target.name === 'task' ? setTask(e.target.value) : setDeadline(e.target.value);
  };

  const addTask: AddTask = () => {
    setTodo([...todo, {taskName: task, deadline: deadline}])
  }

  const completeTask: CompleteTask = (taskNameToDelete) => {
    setTodo(todo.filter((task) => {
      return task.taskName !== taskNameToDelete;
    }));
  };
  
  return (
    <div className="container">
      <Header/>
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