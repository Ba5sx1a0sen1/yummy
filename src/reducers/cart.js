import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux';

const addedIds = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return state.indexOf(action.dishId) === -1
        ? [...state, action.dishId]
        : state
    default:
      return state
  }
}


export default combineReducers({
  addedIds
})