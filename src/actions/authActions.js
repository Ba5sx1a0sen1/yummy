import axios from 'axios'
import { SIGNUP_URL, LOGIN_URL, USER_BY_ID_URL } from '../constants/ApiConstants'
import { history } from '../utils/routerUtils'
import { alert } from './index'
import { getReferrer } from '../selectors'
import * as types from '../constants/ActionTypes'

export const signup = data => dispatch => {
  axios
    .post(SIGNUP_URL, data)
    .then(res => {
      // console.log('res响应', res.data)
      dispatch({ type: types.SIGNUP_SUCCESS, user: res.data.user })
      window.localStorage.setItem('userId', res.data.user._id)
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
  return (dispatch,getState) => {
    axios
      .post(LOGIN_URL, data)
      .then(res => {
        // console.log('res', res.data)
        dispatch({ type: types.LOGIN_SUCCESS, user: res.data.user })
        window.localStorage.setItem('userId', res.data.user._id)
        const referrer = getReferrer(getState())
        dispatch(clearReferrer())
        const redirectTo = referrer || '/dashboard'
        history.push(redirectTo)
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

const receiveCurrentUser = user => ({
  type: types.RECEIVE_CURRENT_USER,
  user
})

const clearReferrer = () => ({
  type: types.CLEAR_REFERRER
})


export const fetchCurrentUser = () => dispatch => {
  const id = window.localStorage.getItem('userId')
  if (id) {
    axios.get(USER_BY_ID_URL.replace(':id', id)).then(res => {
      dispatch(receiveCurrentUser(res.data.user))
    })
  }
}
