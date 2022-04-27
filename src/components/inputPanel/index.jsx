import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'
import { addTodoList } from '../../actions';

import { Input, Form, Button } from './style'

import { useFormik } from 'formik'

const InputPanel = () => {
  const dispatch = useDispatch();
  const [state, setState ] = useState('')

  const formik = useFormik({
    initialValues: {
      input: 'create todo',
    },
    onSubmit: () => {
    
    if (!state.trim().length) {
      setState('')
      return
    }

    dispatch(addTodoList({text: state, id: uuidv4()}))
    setState('')
    },
  });

  const onChange = event => {
    setState(event.target.value)
  }

  

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        id='input'
        name='input'
        type='text'
        placeholder={formik.values.input}
        className="form-control"
        onChange={onChange}
        value={state}
      />
      <Button className='btn btn-primary btn-block' >
        Add Element
      </Button>
    </Form>
  );
};

export default InputPanel;