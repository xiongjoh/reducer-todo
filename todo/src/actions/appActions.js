export const ADD_TODO = 'ADD_TODO'
export const SET_COMPLETED = 'SET_COMPLETED'


const addTodo = (item) => {
    const id = new Date()
    return({type:ADD_TODO, payload:item, id:Date.parse(id)})
}

const setCompleted = (id) => {
    return({type:SET_COMPLETED, payload:id})
}


export default {
    addTodo:addTodo,
    setCompleted:setCompleted,

}