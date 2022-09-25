import * as types from "./actionTypes";

function todosReducer (state = [], action){
    switch(action.type){
        case types.ADD_NEW_TODO :
            return [...state, action.payload]
        case types.GET_ALL_TODO :
            return action.payload
        case types.TOGGLE_TODO : 
            return state.map(todo => (todo._id === action.payload._id ? {...todo, done : !todo.done} : todo))
        case types.UPDATE_TODO :
            return state.map(todo => (todo._id === action.payload._id ? {...todo, data : action.payload.data} : todo))
        case types.DELETE_TODO :
            return state.filter(todo => todo._id !== action.payload._id) 
        default :
        return state
    }
}

export default todosReducer