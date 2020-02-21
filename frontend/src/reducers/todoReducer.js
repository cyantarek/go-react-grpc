import {FETCH_TODO} from "../actions/types";

export default function (previousState = {todo: []}, action) {
    switch (action.type) {
        case FETCH_TODO:
            return {
                ...previousState,
                todo: action.payload
            };
        default:
            return {
                ...previousState
            }
    }
}