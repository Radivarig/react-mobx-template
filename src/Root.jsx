import React from "react"

import { Provider } from "mobx-react"
import { Router } from "react-router-dom"

import Routes from "Routes"

export default ({ stores, routerHistory }) => (
  <Provider {...stores}>
    <Router history={routerHistory}>
      <Routes />
    </Router>
  </Provider>
)

