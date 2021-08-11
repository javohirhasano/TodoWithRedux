import React from 'react'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input, ListGroup, ListGroupItem } from 'reactstrap';
import "./Todo.css"
import { useSelector, useDispatch } from 'react-redux'



const Todo = () => {
    const data = useSelector(state => state.tasks);
    const value = useSelector(state => state.value)
    const dispatch = useDispatch();

    const typing = (event) => {
        const action = { type: "SET_VALUE", payload: event.target.value }
        dispatch(action)
    }
    const add = () => {
        const action = { type: "GET_PLUS", payload: value }
        dispatch(action)
    }
    const deleted = (index) => {
        const action = { type: "GET_DELETE", payload: index }
        dispatch(action)
    }
    const alldelete = (value) => {
        const action = { type: "DELETE_ALL", payload: value }
        dispatch(action)
    }
    const app = () => {
        const action = { type: "YUQORIGA", payload: value }
        dispatch(action)
    }

    return (
        <div className="container  p-3 mb-2">
            <h1>Todo App</h1>
            <div className=" rounded dark shadow" >
                <div className="d-flex justify-content-between align-items-center">
                    <Input onChange={typing} value={value} placeholder="new task" className="me-2 bg-white" />
                    <Button onClick={add} color="primary" >
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </Button>
                    <Button className="battn" onClick={() => alldelete(value)}>
                        Delete
                    </Button>
                </div>
            </div>
            <ListGroup className="">
                {data ?.map((value, index) => {
                    return (
                        <ListGroupItem key={index} action className="d-flex grup align-items-center justify-content-between">
                            <span>{index + 1}. {value.title}</span>
                            <div>
                                <Button onClick={() => app(value)} className="mx-2">app  </Button>
                                <Button onClick={() => deleted(index)} className="batn" color="dander">
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </Button>
                            </div>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>

        </div>
    )
}

export default Todo