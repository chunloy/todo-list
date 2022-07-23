import { FormProps } from "../interfaces";

const Form = ({task, deadline, handleChange, addTask}: FormProps) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div>
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
  );
}

export default Form;