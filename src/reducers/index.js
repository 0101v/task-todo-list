import { 
  ADD_TODO_LIST, DEL_TODO_LIST, CHANGE_TODO_LIST
} from "../actions";

const INITIAL_STATE = [
  { 
    text: 'add todo list',
    id: '1'
  }
]

const reducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    
    case ADD_TODO_LIST:
      return [...state, payload]
    case DEL_TODO_LIST:
      return [...payload]
    case CHANGE_TODO_LIST:
      return [...payload]
    default:
      return state
  }
}

export default reducer