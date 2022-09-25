import * as types from './actionTypes.js'

export const tabReducer = (state = types.ALL_TODOS, action) => {
    switch(action.type) {
        case types.TOGGLE_TAB :
            return action.selected
        default :
            return state;
    }
}