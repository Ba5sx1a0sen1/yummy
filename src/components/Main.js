import React, { Component } from 'react'
import HomeContainer from '../containers/HomeContainer'
import LayoutContainer from '../containers/LayoutContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route component={LayoutContainer} />
        </Switch>
      </Router>
    )
  }
}

export default Main