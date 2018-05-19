import { createSelector } from 'reselect'

export const getAddedIds = state => state.cart.addedIds

export const getIsCartEmpty = createSelector(
  getAddedIds,
  addedIds => addedIds.length === 0
)

export const getCartCount = createSelector(
      getAddedIds,
      addedIds => addedIds.length
)