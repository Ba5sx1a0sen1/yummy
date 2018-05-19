import React from 'react'
import Login from '../components/Login'
import { setTitle } from '../actions'
import { connect } from 'react-redux'
import { login } from '../actions/authActions'
import { setReferrerIfNeeded } from '../actions/'

const LoginContainer = props => <Login {...props} />

export default connect(null, {
  setTitle,
  login,
  setReferrerIfNeeded
})(LoginContainer)