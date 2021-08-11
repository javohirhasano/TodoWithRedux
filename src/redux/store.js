import {createStore} from "redux";

const initialState={
    value:"task",
    tasks:[
        {title:"task 01"}
    ]
}
const reducer=(state=initialState, action) =>{
switch (action.type){
case "SET_VALUE":
    return {...state,
    value: action.payload
    };
    case "GET_PLUS":
        return{...state,
        value:"",
        tasks:[...state.tasks,{title: action.payload}]
        }
        case "GET_DELETE":
                let tasks=[...state.tasks]; 
                tasks.splice(action.payload, 1)
            return{...state,tasks:tasks  }
            case"DELETE_ALL":
            return{...state,
            tasks:[]
            }
            case "YUQORIGA":
                let tatks=[...state.tasks]
                tasks.reduce(action.payload+1)
                return{...state,
                tasks:tasks
                }
   default: return state;
}
}
const store=createStore(reducer)
export default store