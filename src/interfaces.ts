type CompleteTask = (task: string)=> void;
export type HandleChange = (e: React.ChangeEvent<HTMLInputElement>)=> void;
export interface Task {
  taskName: string;
  deadline: string;
}
export interface FormProps {
  task: string;
  deadline: string;
  handleChange: HandleChange;
  addTask(): void;
}

export interface TodoListProps {
  todo: Task[];
  completeTask: CompleteTask;
}

export interface TodoListItemProps {
  todo: Task;
  completeTask: CompleteTask;
}
