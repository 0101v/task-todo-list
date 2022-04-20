import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'
import { addTodoList } from '../../actions';

import { Input } from './components'

const InputPanel = () => {
  const dispatch = useDispatch();
  const [state, setState ] = useState('')

  const onChange = event => {
    setState(event.target.value)
  }

  const onSubmit = event => {
    event.preventDefault()
    
    if (!state.trim().length) {
      setState('')
      return
    }

    dispatch(addTodoList({text: state, id: uuidv4()}))
    setState('')
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        placeholder="input"
        className="form-control"
        onChange={onChange}
        value={state}
      />
      <button className='btn btn-primary btn-block' >
        Add Element
      </button>
    </form>    
  );
};

export default InputPanel;