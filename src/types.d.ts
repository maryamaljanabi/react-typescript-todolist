type AddTodo = (newTodo: Todo) => void;

type Todo = {
  id: number;
  text: string;
  days: number;
  completed: boolean;
};

type ToggleCompleted = (selectedTodo: Todo) => void;
