import React from 'react'
import Login from '../components/Login'
import { setTitle } from '../actions'
import { connect } from 'react-redux'
import { login } from '../actions/authActions'
import { setReferrerIfNeeded } from '../actions/'
import { getIsAuthFetching } from '../selectors/authSelectors'

const LoginContainer = props => <Login {...props} />

const mapStateToProps = state => ({
  isFetching: getIsAuthFetching(state)
})

export default connect(mapStateToProps, {
  setTitle,
  login,
  setReferrerIfNeeded
})(LoginContainer)