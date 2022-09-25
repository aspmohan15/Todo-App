import express from 'express';
import { addTodo, getTodo, toggleTodo, updateTodo, deleteTodo } from '../controllers/todo.controller.js';

const routes = express.Router();


routes.post("/todos", addTodo)
routes.get("/todos", getTodo)
routes.get("/todos/:id", toggleTodo)
routes.put("/todos/:id", updateTodo)
routes.delete("/todos/:id", deleteTodo)

export default routes;