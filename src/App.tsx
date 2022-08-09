import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const appendTodo = (todo: Todo): void => {
    const item: Todo = { ...todo, id: todoList.length + 1 };
    setTodoList([...todoList, item]);
  };

  const onTodoClick = (item: Todo): void => {
    const index: number = todoList.findIndex((todo) => todo.id === item.id);
    const tempTodoList = todoList;
    tempTodoList[index] = { ...item, completed: !item.completed };
    setTodoList([...tempTodoList]);
  };

  return (
    <div className="App">
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" width="50%" m="auto" mt={20} mb={20}>
        <Typography variant="h5" mb={2}>
          To-do App
        </Typography>
        <TodoForm addTodo={(data: Todo): void => appendTodo(data)} />

        {todoList && Boolean(todoList.length) && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Task</TableCell>
                  <TableCell align="center">Days</TableCell>
                  <TableCell align="center">Completed</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todoList.map((todo) => (
                  <TableRow key={todo.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }} onClick={() => onTodoClick(todo)} className="clickable-task">
                    <TableCell component="th" scope="row" align="center">
                      {todo.text}
                    </TableCell>
                    <TableCell align="center">{todo.days}</TableCell>
                    <TableCell align="center">{todo.completed ? <CheckCircleIcon style={{ color: "green" }} /> : <CancelIcon style={{ color: "red" }} />}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </div>
  );
};

export default App;
