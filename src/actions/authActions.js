import axios from 'axios'
import { SIGNUP_URL,LOGIN_URL } from '../constants/ApiConstants'
import { history } from '../utils/routerUtils'
import { alert } from './index'
import * as types from '../constants/ActionTypes'

export const signup = data => dispatch => {
  axios
    .post(SIGNUP_URL, data)
    .then(res => {
      // console.log('res响应', res.data)
      dispatch({ type: types.SIGNUP_SUCCESS, user: res.data.user })
      history.push('/dashboard')
    })
    .catch(err => {
      if (err.response) {
        const { msg } = err.response.data
        // console.log('报错信息:'+msg)
        dispatch(alert(msg))
      }
    })
}

export const login = data => {
    return dispatch => {
      axios
        .post(LOGIN_URL, data)
        .then(res => {
          // console.log('res', res.data)
          dispatch({ type: types.LOGIN_SUCCESS, user: res.data.user })
          history.push('/dashboard')
        })
        .catch(err => {
          if (err.response) {
            const { msg } = err.response.data
            // console.log(msg)
            dispatch(alert(msg))
          }
        })
    }
  }

  export const logout = () => {
    history.push('/')
    return dispatch => dispatch({ type: types.LOGOUT })
  }