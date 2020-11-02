
import './App.css';
import React, { useReducer } from 'react'

import reducer, { initialState } from './reducers/appReducer'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  
  console.log(state)

  return (
    <div className="App">
      <TodoForm/>
      {state 
      ? (state.map(item => <TodoItem key={item.id} item={item.item}/>)) 
      : null}
    </div>
  );
}

export default App;
