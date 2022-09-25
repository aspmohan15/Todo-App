import React from "react";
import { useState } from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodos, updateTodo } from "../Redux/Todo/action";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState();
  const [text, setText] = useState(todo.data);

  const formSubmit = (e) => {
    e.preventDefault();
    setEditing((prev) => !prev);
    dispatch(updateTodo(todo._id, text));
  };

  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodos(todo._id))}
      style={{
        textDecoration: todo.done ? "line-through" : "",
        color: todo.done ? "#bdc3c7" : "#34495e",
        marginTop: "5%",
        padding: "1.5%",
      }}
    >
      <span
        style={{
          display: editing ? "none" : "",
        }}
      >
        {todo.data}
      </span>

      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={formSubmit}
      >
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>

      <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
        <BsFillTrashFill />
      </span>
      <span className="icon" onClick={() => setEditing((prev) => !prev)}>
        <BsFillPencilFill />
      </span>
    </li>
  );
}

export default TodoItem;
