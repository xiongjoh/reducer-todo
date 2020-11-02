export const ADD_TODO = 'ADD_TODO'
export const SET_COMPLETED = 'SET_COMPLETED'
export const SET_ID = 'SET_ID'

const addTodo = (item) => {
    return({type:ADD_TODO, payload:item})
}

const setCompleted = (completed) => {
    return({type:SET_COMPLETED, payload:completed})
}

const setID = () => {
    const id = new Date()
    return({type:SET_ID, payload:Date.parse(id)})
}

export default {
    addTodo:addTodo,
    setCompleted:setCompleted,
    setID:setID,
}