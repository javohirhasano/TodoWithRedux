
import { SET_VALUE, GET_PLUS, GET_DELETE, DELETE_ALL, EDIT_TASK, TASK_UP, TASK_DAWN } from "./typies";

export const setValue = (dispatch, value) => {
    const action = { type: SET_VALUE, payload: value }
    dispatch(action);
}
export const addTask = (dispatch, value) => {
    const action = { type: GET_PLUS, payload: value }
    dispatch(action)
}
export const deleted = (dispatch, index) => {
    const action = { type: GET_DELETE, payload: index }
    dispatch(action)
}
export const allDelete = (dispatch, value) => {
    const action = { type: DELETE_ALL, payload: value }
    dispatch(action)
}
export const Edit = (dispatch, index, value) => {
    const action = { type: EDIT_TASK, payload: { index, value } };
    dispatch(action);
}
export const taskUp = (dispatch, index) => {
    const action = { type: TASK_UP, payload: { index } };
    dispatch(action);
}
export const taskDawn = (dispatch, index) => {
    const action = { type: TASK_DAWN, payload: { index } };
    dispatch(action);
}
