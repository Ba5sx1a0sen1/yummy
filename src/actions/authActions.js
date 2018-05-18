import axios from 'axios'
import { SIGNUP_URL,LOGIN_URL } from '../constants/ApiConstants'
import { history } from '../utils/routerUtils'
import { alert } from './index'

export const signup = data => dispatch => {
  axios
    .post(SIGNUP_URL, data)
    .then(res => {
      console.log('res响应', res.data)
      history.push('/dashboard')
    })
    .catch(err => {
      if (err.response) {
        const { msg } = err.response.data
        console.log('报错信息:'+msg)
        dispatch(alert(msg))
      }
    })
}

export const login = data => {
    return dispatch => {
      axios
        .post(LOGIN_URL, data)
        .then(res => {
          console.log('res', res.data)
          history.push('/dashboard')
        })
        .catch(err => {
          if (err.response) {
            const { msg } = err.response.data
            console.log(msg)
            dispatch(alert(msg))
          }
        })
    }
  }