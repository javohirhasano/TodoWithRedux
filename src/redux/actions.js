
import { SET_VALUE, GET_PLUS, GET_DELETE, DELETE_ALL } from "./typies";

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