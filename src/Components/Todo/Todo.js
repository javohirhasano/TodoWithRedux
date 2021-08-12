import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input, ListGroup } from 'reactstrap';
import "./Todo.css"
import { useSelector, useDispatch } from 'react-redux'

import { setValue, addTask, allDelete } from '../../redux/actions';
import ListGroupItem from '../ListGroupItem';




const Todo = () => {
    const value = useSelector(state => state.value);
    const data = useSelector(state => state.tasks);

    const dispatch = useDispatch();
    const add = () => (value != "") && addTask(dispatch, value);


    return (
        <div className="container  p-3 mb-2">
            <h1>Todo App</h1>
            <div className=" rounded dark shadow" >
                <div className="d-flex justify-content-between align-items-center">
                    <Input onChange={(e) => setValue(dispatch, e.target.value)}
                        value={value} placeholder="new task" className="me-2 bg-white" />
                    <Button onClick={(add)} color="primary" >
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </Button>
                    <Button className="battn" onClick={() => allDelete(dispatch, value)}>
                        Delete
                    </Button>
                </div>
            </div>
            <ListGroup>
                {data ?.map((item, index) =>
                    <ListGroupItem key={index} index={index} item={item} />)}
            </ListGroup>


        </div>
    )
}

export default Todo