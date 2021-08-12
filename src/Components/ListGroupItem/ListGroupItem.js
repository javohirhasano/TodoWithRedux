
import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faBars, faEdit, faArrowUp, faArrowDown, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import ListGroupItemWrapper from "./ListGroupItemWrapper";
import { useDispatch } from "react-redux";
import { deleted, Edit, taskUp, taskDawn } from "../../redux/actions";
import { ButtonGroup } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ListGroup = ({ index, item }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(item.title)
    const dispatch = useDispatch()

    const cancel = () => {
        setIsEdit(false)
        setIsEdit(item.title)
        setIsEdit(false)
    }
    const save = () => {
        Edit(dispatch, index, value)
    }
    return (

        <ListGroupItemWrapper tag="a" href="#" action
            className="d-flex align-items-center justify-content-between">
            {isEdit ? <Input value={value} onChange={(e) => setValue(e.target.value)}></Input> :
                < h4 > {index + 1}. {item.title}</h4>}
            {isEdit ?
                <ButtonGroup className="d-flex">
                    <Button color="success" onClick={save} >
                        <FontAwesomeIcon icon={faSave} className="me-2"></FontAwesomeIcon>
                    </Button>
                    <Button color="danger" onClick={cancel}>
                        <FontAwesomeIcon icon={faTimes} className="me-2"></FontAwesomeIcon>
                    </Button>
                </ButtonGroup>
                : <UncontrolledDropdown>
                    <DropdownToggle caret>
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>
                            functions
                          </DropdownItem>

                        <DropdownItem onClick={() => deleted(dispatch, index)} >
                            <FontAwesomeIcon className="batn mx-2" color="dander" icon={faTrash}></FontAwesomeIcon>
                            Delete
                        </DropdownItem>


                        <DropdownItem onClick={() => setIsEdit(true)} >
                            <FontAwesomeIcon className="batn mx-2" color="dander"
                                icon={faEdit}></FontAwesomeIcon>
                            Edit                        </DropdownItem>


                        <DropdownItem onClick={() => taskUp(dispatch, index)} >
                            <FontAwesomeIcon className="batn mx-2" color="dander" icon={faArrowUp}></FontAwesomeIcon>
                            Up
                         </DropdownItem>

                        <DropdownItem onClick={() => taskDawn(dispatch, index)} >
                            <FontAwesomeIcon className="batn mx-2" color="dander" icon={faArrowDown}></FontAwesomeIcon>
                            Down
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            }
        </ListGroupItemWrapper >

    )
}
export default ListGroup