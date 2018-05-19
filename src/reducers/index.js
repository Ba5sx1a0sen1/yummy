import { combineReducers } from 'redux'
import common from './common'
import auth from './auth'
import user from './user'
import dish from './dish'
export default combineReducers({
  common,
  auth,
  user,
  dish
})
