import React from 'react'
import Signup from '../components/Signup'
import { setTitle } from '../actions'
import { connect } from 'react-redux'

const SignupContainer = props => <Signup {...props} />

export default connect(null, {
    setTitle
})(SignupContainer)