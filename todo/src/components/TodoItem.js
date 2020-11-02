import React from 'react'

const TodoItem = (props) => {
    const { itemId, item, completed, dispatch, actions } = props

    const toggleCompleted = () => {
        dispatch(actions.setCompleted(itemId))
    }

    return (
        <p onClick={toggleCompleted} className={completed ? 'complete' : ''}>{item}</p>
    )
}

export default TodoItem