import {ADD_TODO, SET_COMPLETED} from '../actions/appActions'


export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
  }]



const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_TODO):
            return([...state, {item:action.payload, completed:false, id:action.id}])
        case(SET_COMPLETED):
            return state.map(item => item.id === action.payload ? {...item, completed:!item.completed} : item)
        default:
            return(state)
    }
}

export default reducer;
