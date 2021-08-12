import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input } from 'reactstrap';
import "./Todo.css"
import { useSelector, useDispatch } from 'react-redux'
import { setValue, addTask, allDelete } from '../redux/actions';
import ListGroup from './ListGroup';

const Todo = () => {
    const data = useSelector(state => state.tasks);
    const value = useSelector(state => state.value)
    const dispatch = useDispatch();



    return (
        <div className="container  p-3 mb-2">
            <h1>Todo App</h1>
            <div className=" rounded dark shadow" >
                <div className="d-flex justify-content-between align-items-center">
                    <Input onChange={(e) => setValue(dispatch, e.target.value)}
                        value={value} placeholder="new task" className="me-2 bg-white" />
                    <Button onClick={() => addTask(dispatch, value)} color="primary" >
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </Button>
                    <Button className="battn" onClick={() => allDelete(value)}>
                        Delete
                    </Button>
                </div>
            </div>
            <ListGroup className="">
                {data.map((value, index) => <ListGroup
                    value={value} key={index} index={index} />
                )}
            </ListGroup>

        </div>
    )
}

export default Todo