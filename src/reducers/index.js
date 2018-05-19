import { combineReducers } from 'redux'
import common from './common'
import auth from './auth'
import user from './user'

export default combineReducers({
  common,
  auth,
  user
})
