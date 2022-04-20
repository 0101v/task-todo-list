import React from 'react'

import { Todolistitemlabel, Button } from './components'


const TodoListItem = ({ text, onDeleted, onChange }) => {

  

  return (
    <span>
      <Todolistitemlabel >
        {text}
      </Todolistitemlabel>
      <Button type='button'
        className='btn btn-outline-danger btn-sm float-right'
        onClick={onDeleted}
        >
        <i className='fa fa-trash-o' />
      </Button>
      <Button type='button'
        className='btn btn-outline-success btn-sm float-right'
        onClick={onChange}
        >
        <i className='fa fa-pencil-square-o'/>  
      </Button>
    </span>
  )
};

export default TodoListItem;