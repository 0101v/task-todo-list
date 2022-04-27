import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { TodoListComponent, Item } from './style'
import TodoListItem from '../todoListItem'

import { delTodoList, changeElemTodoList } from '../../actions'

import { Button, TextField,  DialogActions, DialogContent, Dialog } from '@mui/material'

import { useFormik } from 'formik'

const TodoList = () => {
  const store = useSelector(store => store)
  const dispatch = useDispatch()

  const [inputText, setInputText] = useState('')
  const [open, setOpen] = useState(false)
  const [listId, setListId] = useState('')

  const formik = useFormik({
    initialValues: {
      input: '',
    },
    onSubmit: () => {
      const todoList = store.map(el => {
        if (el.id === listId) {
          el.text = inputText;
        }
        return el
      })
      
      dispatch(changeElemTodoList(todoList))
      setOpen(false)
    },
  });

  const onDeleted = (id) => () => {
    const list = store.filter(el => el.id !== id)
    dispatch(delTodoList(list))
  }

  const onChange = (id) => () => {
    const changeObjTodo = store.filter(el => el.id === id)[0]
    setInputText(changeObjTodo.text)
    setListId(id)
    setOpen(true)
  }

  

  const onChangeText = (event) => {
    setInputText(event.target.value)
  }
  
  return (
    <>
      <TodoListComponent className='list-group'>
        {
          store.map(({ text, id}) => {
            return (
              <Item key={id} className="list-group-item">
                <TodoListItem 
                  text={text}
                  onDeleted={onDeleted(id)}
                  onChange={onChange(id)}
                />
              </Item>
            )
          })
        }
      </TodoListComponent>

      <Dialog open={open} onClose={formik.handleSubmit}>
        <DialogContent>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="text"
            label="Enter Text"
            name="text"
            value={inputText}
            onChange={onChangeText}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={formik.handleSubmit}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  )
};

export default TodoList;