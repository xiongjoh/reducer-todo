import React from 'react'

const TodoItem = (props) => {
    const { item } = props
    return (
        <p>{item}</p>
    )
}

export default TodoItem