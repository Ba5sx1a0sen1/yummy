import * as types from '../constants/ActionTypes'

export const addToCart = dishId => dispatch => {
  dispatch({ type: types.ADD_TO_CART, dishId })
}