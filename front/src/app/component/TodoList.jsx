"use client";
import { useQuery } from "react-query";

const fetchTodos = async () => {
  const res = await fetch("http://localhost:5000/todos");
  return res.json();
};

const TodoList = () => {
  const { data: todos, status } = useQuery("todos", fetchTodos);
  return (
    <div>
      <ul>
        {status === "success" &&
          todos.map((todo) => <li key={todo._id}>{todo.name}</li>)}
      </ul>
    </div>
  );
};

export default TodoList;
