import { 
  ADD_TODO_LIST_ACTION, DEL_TODO_LIST_ACTION, CHANGE_TODO_LIST_ACTION
} from "../constants";

const INITIAL_STATE = [
  { 
    text: 'first list',
    id: '1'
  }
]

const reducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    
    case ADD_TODO_LIST_ACTION:
      return [...state, payload]
    case DEL_TODO_LIST_ACTION:
      return [...payload]
    case CHANGE_TODO_LIST_ACTION:
      return [...payload]
    default:
      return state
  }
}

export default reducer