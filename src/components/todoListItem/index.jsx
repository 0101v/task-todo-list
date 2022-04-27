import React from 'react'

import { Todolistitemlabel, Button, Container, SvgElem } from './style'


const TodoListItem = ({ text, onDeleted, onChange }) => {

  return (
    <Container>
      <Todolistitemlabel >
        {text}
      </Todolistitemlabel>
      <Button type='button'
        className='btn btn-outline-danger btn-sm float-right'
        onClick={onDeleted}
        >
        <SvgElem className='fa fa-trash-o' />
      </Button>
      <Button type='button'
        className='btn btn-outline-success btn-sm float-right'
        onClick={onChange}
        >
        <SvgElem className='fa fa-pencil-square-o'/>  
      </Button>
    </Container>
  )
};

export default TodoListItem;