
import initialState from "./initialState";
import { SET_VALUE, GET_PLUS, GET_DELETE, DELETE_ALL } from "./typies";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUE:
            return {
                ...state,
                value: action.payload
            };

        case GET_PLUS:
            return {
                ...state,
                value: "",
                tasks: [...state.tasks, { title: action.payload }]
            };

        case GET_DELETE:
            let tasks = [...state.tasks];
            tasks.splice(action.payload, 1);

            return { ...state, tasks }

        case DELETE_ALL:
            return {
                ...state,
                tasks: []
            }

        default: return state;
    }
}

export default reducer;