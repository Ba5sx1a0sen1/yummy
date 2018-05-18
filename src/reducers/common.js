import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const title = (state = 'Yummy', action) => {
  switch (action.type) {
    case types.SET_TITLE:
      return action.title
    default:
      return state
  }
}

export default combineReducers({
  title
})