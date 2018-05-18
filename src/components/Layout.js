import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import SignupContainer from '../containers/SignupContainer'
import LoginContainer from '../containers/LoginContainer'
import styled from 'styled-components'

const Layout = () => (
  <Wrap>
    <Header>页面标题</Header>
    <Switch>
      <Route path="/signup" component={SignupContainer} />
      <Route path="/login" component={LoginContainer} />
    </Switch>
  </Wrap>
)

export default Layout

const Wrap = styled.div``

const Header = styled.div``