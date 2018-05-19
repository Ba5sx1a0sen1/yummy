import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const initState = [
  {
    _id: '1',
    poster: 'tlms.png',
    name: '提拉米苏',
    price: 20,
    desc: '好吃好吃'
  },
  {
    _id: '2',
    poster: 'hsl.png',
    name: '黑森林',
    price: 20,
    desc: '好吃好吃'
  }
]

const all = (state = initState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  all
})