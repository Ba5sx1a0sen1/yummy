import React from 'react'
import Signup from '../components/Signup'
import { setTitle } from '../actions'
import { signup } from '../actions/authActions'
import { connect } from 'react-redux'

const SignupContainer = props => <Signup {...props} />

export default connect(null, {
    setTitle,
    signup
})(SignupContainer)