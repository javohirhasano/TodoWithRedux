
import initialState from "./initialState";
import { SET_VALUE, GET_PLUS, GET_DELETE, EDIT_TASK, TASK_UP, TASK_DAWN } from "./typies";


const reducer = (state = initialState, action) => {
    let tasks, i;

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
            tasks = [...state.tasks];
            tasks.splice(action.payload, 1);
            return { ...state, tasks };


        case EDIT_TASK:
            tasks = [...state.tasks];
            tasks[action.payload.index].title = action.payload.value;
            return { ...state.tasks }

        case TASK_UP:
            tasks = [...state.tasks];
            i = action.payload;
            if (i < tasks.length - 1)
                [tasks[i - 1], tasks[i]] = [tasks[i], tasks[i - 1]]
            return { ...state.tasks }

        case TASK_DAWN:
            tasks = [...state.tasks];
            i = action.payload;
            if (i < tasks.length - 1)
                [tasks[i + 1], tasks[i]] = [tasks[i], tasks[i + 1]]
            return { ...state.tasks }

        default: return state;
    }
}

export default reducer;