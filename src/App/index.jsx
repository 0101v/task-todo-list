import React from 'react'

import { Container, TopPanel } from './style'

import AppHeader from '../components/header'
import InputPanel from '../components/inputPanel'
import TodoList from '../components/todoList'

const App = () => {
  
  return (
    <Container>
      <AppHeader  />
      <TopPanel>
        <InputPanel/>
      </TopPanel>
      <TodoList />
    </Container>
  )
}

export default App;