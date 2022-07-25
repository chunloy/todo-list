import { FormProps } from "../interfaces";

const Form = ({task, deadline, handleChange, addTask}: FormProps) => {
  return (
    <div className="is-flex is-justify-content-center">
      <form onSubmit={e => e.preventDefault()}>
        <input 
          className="input is-primary m-1"
          type="text" 
          name='task' 
          placeholder='Add a task' 
          value={task}
          onChange={handleChange}
        />

        <input 
          className="input is-primary m-1"
          type="text" 
          name='deadline' 
          placeholder='Set a deadline (in days)'
          value={deadline}
          onChange={handleChange}
        />
          
        <div className="is-flex is-justify-content-center"> 
          <button className="button m-1" onClick={addTask}>Add Task</button>
        </div>
      </form>
    </div>
  );
}

export default Form;