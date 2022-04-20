import React from 'react'

import { Container, TopPanel } from './components'

import AppHeader from '../components/app-header'
import InputPanel from '../components/input-panel'
import TodoList from '../components/todo-list'

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