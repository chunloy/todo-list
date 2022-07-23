export interface Task {
  taskName: string;
  deadline: string;
}
export interface FormProps {
  task: string;
  deadline: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  addTask(): void;
}

export interface TodoListProps {
  todo: Task[];
  completeTask(task: string): void;
}

export interface TodoListItemProps {
  todo: Task;
  completeTask(task: string): void;
}