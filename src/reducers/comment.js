import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const all = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_COMMENTS:
      return action.comments
    default:
      return state
  }
}

export default combineReducers({
  all
})