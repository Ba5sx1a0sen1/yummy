import React from 'react'
import Login from '../components/Login'
import { setTitle } from '../actions'
import { connect } from 'react-redux'
import { login } from '../actions/authActions'

const LoginContainer = props => <Login {...props} />

export default connect(null, {
  setTitle,
  login
})(LoginContainer)