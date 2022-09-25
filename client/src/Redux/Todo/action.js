import axios from "axios";
import * as types from "./actionTypes";

const API_URL = "https://client-smoky-zeta.vercel.app";

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });
    dispatch({ type: types.ADD_NEW_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling addNewTodo", error.message);
  }
};

export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos`);
    dispatch({ type: types.GET_ALL_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllTodo", error.message);
  }
};
export const toggleTodos = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos/${id}`);
    dispatch({ type: types.TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling toggleTodos", error.message);
  }
};
export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/todos/${id}`, { data });
    dispatch({ type: types.UPDATE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling updateTodo", error.message);
  }
};
export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/todos/${id}`);
    dispatch({ type: types.DELETE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling deleteTodo", error.message);
  }
};

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: types.TOGGLE_TAB, selected: tab });
};
