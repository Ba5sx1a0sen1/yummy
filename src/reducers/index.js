import { combineReducers } from 'redux'
import common from './common'
import auth from './auth'
import user from './user'
import dish from './dish'
import comment from './comment'
import cart from './cart'

export default combineReducers({
  common,
  auth,
  user,
  dish,
  comment,
  cart
})
