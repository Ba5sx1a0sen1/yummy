import React from 'react'
import Cart from '../components/Cart'
import { connect } from 'react-redux'
import { getCartDishes } from '../selectors/cartSelectors'
import { incrCartItem, decrCartItem } from '../actions/cartActions'

const CartContainer = props => <Cart {...props} />

const mapStateToProps = state => ({
    cartDishes: getCartDishes(state)
})

export default connect(mapStateToProps, {
    incrCartItem,
    decrCartItem
})(CartContainer)