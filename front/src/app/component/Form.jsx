"use client";
import { useMutation, useQueryClient } from "react-query";
import styles from "./form.module.css";
import { useRef } from "react";

const Form = () => {
  const todoName = useRef("");
  const queryClient = useQueryClient();

  const addTodo = (e) => {
    e.preventDefault();
    mutate(todoName.current.value);
  };

  const postTodos = async (todo) => {
    const res = await fetch("http://localhost:5000/todos", {
      method: "POST",
      body: JSON.stringify({ todo }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  };

  const { mutate, error, isLoading } = useMutation((todo) => postTodos(todo), {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("todos");
    },
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Add Todo</h1>
      {isLoading ? (
        "Adding Post..."
      ) : (
        <form className={styles.form} onSubmit={addTodo}>
          <input
            type="text"
            name="todo"
            className={styles.input}
            ref={todoName}
          />
          <button className={styles.btn}>Add</button>
        </form>
      )}
    </div>
  );
};

export default Form;
