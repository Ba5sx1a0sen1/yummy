import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const isAuthenticated = (state = false, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
        case types.SIGNUP_SUCCESS:
            return true
        case types.LOGOUT:
            return false
        default:
            return state
    }
}

export default combineReducers({
    isAuthenticated
})