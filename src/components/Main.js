import React, { Component } from 'react'
import HomeContainer from '../containers/HomeContainer'
import LayoutContainer from '../containers/LayoutContainer'
import {Router} from "react-router"
import { history } from '../utils/routerUtils'
import { Switch, Route } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route component={LayoutContainer} />
        </Switch>
      </Router>
    )
  }
}

export default Main