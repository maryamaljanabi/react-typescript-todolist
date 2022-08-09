import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";

interface TodoFormProps {
  addTodo: AddTodo;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [todoItem, setTodoItem] = useState<Todo>({ id: 0, text: "", days: 0, completed: false });

  const submitTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (addTodo !== null) {
      addTodo(todoItem);
    }
  };

  return (
    <form onSubmit={submitTodo}>
      <Stack direction="row" spacing={2} mb={3}>
        <TextField required label="Task" value={todoItem.text} onChange={(e: ChangeEvent<HTMLInputElement>): void => setTodoItem({ ...todoItem, text: e.target.value })} />

        <TextField
          type="number"
          value={todoItem.days}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => setTodoItem({ ...todoItem, days: +e.target.value })}
          InputProps={{
            inputProps: {
              max: 100,
              min: 1,
            },
          }}
          label="Days"
        />

        <Button variant="contained" type="submit">
          Add Task
        </Button>
      </Stack>
    </form>
  );
};

export default TodoForm;
