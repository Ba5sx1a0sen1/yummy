import React from 'react'
import Login from '../components/Login'
import { setTitle } from '../actions'
import { connect } from 'react-redux'

const LoginContainer = props => <Login {...props} />

export default connect(null, {
  setTitle
})(LoginContainer)