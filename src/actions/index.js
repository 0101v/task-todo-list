
export const ADD_TODO_LIST = 'ADD_TODO_LIST'
export const DEL_TODO_LIST = 'DEL_TODO_LIST'
export const CHANGE_TODO_LIST = 'CHANGE_TODO_LIST'

export const addTodoList = payload => ({
  type: ADD_TODO_LIST,
  payload,
})
export const delTodoList = payload => ({
  type: DEL_TODO_LIST,
  payload,
})
export const changeElemTodoList = payload => ({
  type: CHANGE_TODO_LIST,
  payload,
})
