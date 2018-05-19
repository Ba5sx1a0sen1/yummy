import React from 'react'
import Cart from '../components/Cart'
import { connect } from 'react-redux'
import { getCartDishes,getTotal } from '../selectors/cartSelectors'
import { incrCartItem, decrCartItem,checkout } from '../actions/cartActions'

const CartContainer = props => <Cart {...props} />

const mapStateToProps = state => ({
    cartDishes: getCartDishes(state),
    total: getTotal(state)
})

export default connect(mapStateToProps, {
    incrCartItem,
    decrCartItem,
    checkout
})(CartContainer)