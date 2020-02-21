import {combineReducers} from "redux";
import todoReducer from "./todoReducer"
import commonReducer from "./commonReducer"

export default combineReducers({
    todoState: todoReducer,
    commonState: commonReducer
},);