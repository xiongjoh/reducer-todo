import {ADD_TODO, SET_COMPLETED, SET_ID} from '../actions/appActions'


export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
  }]

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_TODO):
            return({...state, item:action.payload})
        case(SET_COMPLETED):
            return({...state, completed:action.payload})
        case(SET_ID):
            return({...state, id:action.payload})
        default:
            return(state)
    }
}

export default reducer;