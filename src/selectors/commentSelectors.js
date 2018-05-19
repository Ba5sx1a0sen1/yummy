import { createSelector } from 'reselect'

export const getComments = state => state.comment.all

export const getCommentsByDishId = createSelector(
  getComments,
  comments => comments.reduce((obj, comment) => {
    if (obj[comment.dish._id]) {
      obj[comment.dish._id].push(comment)
    } else {
      obj[comment.dish._id] = [comment]
    }
    return obj
  }, {})
)