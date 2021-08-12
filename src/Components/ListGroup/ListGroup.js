import "./ListGroupItemWrapper"
import React from 'react'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ListGroupItemWrapper from "./ListGroupItemWrapper";
import { useDispatch } from "react-redux";
import { deleted } from "../../redux/actions";

const ListGroup = ({ index, value }) => {
    const dispatch = useDispatch()
    return (
        <ListGroupItemWrapper tag="a" href="#" action
            className="d-flex align-items-center justify-content-between">

            {index + 1}. {value.title}
            <div>
                <Button onClick={() => deleted(dispatch, index)} className="batn" color="dander">
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </Button>
            </div>

        </ListGroupItemWrapper>
    )
}
export default ListGroup