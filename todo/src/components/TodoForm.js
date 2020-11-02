import React, { useState, useReducer } from 'react'

export default function TodoForm(props) {
    const {dispatch, actions} = props
    const [formValues, setFormValues] = useState('')

    const onChange = (e) => {
        setFormValues(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(actions.addTodo(formValues))
        setFormValues('')
    }

    const clearTodo = (e) => {
        e.preventDefault()
        dispatch(actions.clearTodo())
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                <input 
                type='text'
                name='todo item'
                value={formValues}
                onChange={onChange}
                />
            </label>
            <button>Add Todo</button>
            <button onClick={clearTodo} >Clear Todo</button>
        </form>
    )
}