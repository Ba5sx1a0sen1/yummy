import * as types from '../constants/ActionTypes'
import axios from 'axios'
import { USERS_URL, UPDATE_AVATAR_URL } from '../constants/ApiConstants'

export const receiveUsers = users => ({
  type: types.RECEIVE_USERS,
  users
})

export const fetchUsers = () => dispatch => {
  axios.get(USERS_URL).then(res => {
    dispatch(receiveUsers(res.data.users))
  })
}
const sendAvatarRequest = formData => {
  axios.post(UPDATE_AVATAR_URL, formData).then(
    res => {
      console.log('request sent')
    }
  )
}

export const updateAvatar = e => dispatch => {
  const file = e.target.files[0]
  const reader = new FileReader()
  let formData = new FormData()
  reader.onload = e => {
    console.log('inside onload-------e.target.value', e.target.result)
    formData.append('avatar', file)
    sendAvatarRequest(formData)
  }
  console.log('after onload-----file', file)
  reader.readAsDataURL(file)
}