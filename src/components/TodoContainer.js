import Todo from "./Todo";
import Input from "./Input";
import { useState } from "react";
import todoArray from "../data";
export default function TodoContainer() {
  const addTodo = (todoObj) => {
    setTodos((prevTodos) => {
      return [...prevTodos, todoObj];
    });
  };
  const checkTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      });
    });
  };
  const handleRemove = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  };
  const [todos, setTodos] = useState(todoArray);
  const todoElements = todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        checked={todo.checked}
        checkTodo={() => {
          checkTodo(todo.id);
        }}
        removeTodo={() => handleRemove(todo.id)}
        todo={todo.todo}
      />
    );
  });
  return (
    <div>
      <Input addTodo={addTodo} />
      <div className="todo-container">{todoElements}</div>
    </div>
  );
}
