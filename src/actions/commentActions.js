import * as types from '../constants/ActionTypes'
import { COMMENTS_URL } from '../constants/ApiConstants'
import axios from 'axios'

const receiveComments = comments => ({
  type: types.RECEIVE_COMMENTS,
  comments
})

export const fetchComments = () => dispatch => {
  axios.get(COMMENTS_URL).then(
    res => {
      dispatch(receiveComments(res.data.comments))
    }
  )
}