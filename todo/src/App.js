
import './App.css';
import React, { useReducer } from 'react'

import reducer, { initialState } from './reducers/appReducer'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'
import actions from './actions/appActions'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  
  console.log(state)

  return (
    <div className="App">
      <TodoForm dispatch={dispatch} actions={actions}/>
      {state 
      ? (state.map(item => <TodoItem key={item.id} itemId={item.id} actions={actions} dispatch={dispatch} item={item.item} completed={item.completed}/>)) 
      : null}
    </div>
  );
}

export default App;
