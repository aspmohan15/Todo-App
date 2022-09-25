import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getAllTodos } from "../Redux/Todo/action";
import { ACTIVE_TODOS, ALL_TODOS, DONE_TODOS } from "../Redux/Todo/actionTypes";
import Tabs from "./Tabs";
import TodoItem from "./TodoItem";

function Todo() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  const getTodo = () => {
    if (currentTab === ALL_TODOS) {
      return todos;
    } else if (currentTab === ACTIVE_TODOS) {
      return todos.filter((todo) => !todo.done);
    } else if (currentTab === DONE_TODOS) {
      return todos.filter((todo) => todo.done);
    }
  };

  const removeDoneTodo = () => {
    todos.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  };

  return (
    <article>
      <div>
        <Tabs currentTab={currentTab} />
        {todos.some((todo) => todo.done) ? (
          <button onClick={removeDoneTodo} className="tab-button clear">
            Remove Done Todo
          </button>
        ) : null}
      </div>
      <ul>
        {getTodo().map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </ul>
    </article>
  );
}

export default Todo;
