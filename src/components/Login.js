import React, { Component } from 'react'
import { loginConfig } from '../constants/FormConfig'
import Form from './Form'

class Login extends Component {
  render() {
    return <Form config={loginConfig} />
  }
}

export default Login