import { 
  ADD_TODO_LIST_ACTION, DEL_TODO_LIST_ACTION, CHANGE_TODO_LIST_ACTION
} from "../constants";

export const addTodoList = payload => ({
  type: ADD_TODO_LIST_ACTION,
  payload,
})
export const delTodoList = payload => ({
  type: DEL_TODO_LIST_ACTION,
  payload,
})
export const changeElemTodoList = payload => ({
  type: CHANGE_TODO_LIST_ACTION,
  payload,
})
