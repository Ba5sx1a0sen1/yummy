import React from 'react'
import CartButton from '../components/CartButton'
import { connect } from 'react-redux'

const CartButtonContainer = props => <CartButton {...props} />

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(CartButtonContainer)