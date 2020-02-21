import {SET_LOADING} from "../actions/types";

export default function (previousState = {loading: false}, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...previousState,
                loading: action.payload
            };

        default:
            return {
                ...previousState
            }
    }
}