import {legacy_createStore as createStore, combineReducers, applyMiddleware, getState} from 'redux'
import thunk from 'redux-thunk'

import {composeWithDevTools} from "redux-devtools-extension"
import todosReducer from './Todo/todosReducer'
import { tabReducer } from './Todo/tabsReducer'

const reducer = combineReducers(
    {
        todos : todosReducer,
        currentTab : tabReducer
    }
)

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store;