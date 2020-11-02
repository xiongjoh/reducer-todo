export const ADD_TODO = 'ADD_TODO'
export const SET_COMPLETED = 'SET_COMPLETED'
export const CLEAR_TODO = 'CLEAR_TODO'


const addTodo = (item) => {
    const id = new Date()
    return({type:ADD_TODO, payload:item, id:Date.parse(id)})
}

const setCompleted = (id) => {
    return({type:SET_COMPLETED, payload:id})
}

const clearTodo = () => {
    return({type:CLEAR_TODO})
}

export default {
    addTodo:addTodo,
    setCompleted:setCompleted,
    clearTodo:clearTodo,
}