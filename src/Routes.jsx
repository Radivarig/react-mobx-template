import React from "react"
import { Link, Switch, Route } from "react-router-dom"

import App from "containers/App"
import Paths from "containers/Paths"
import Timer from "containers/Timer"

// eslint-disable-next-line no-shadow
const NoMatch = ({ location }) => <div>Route not found: {location.pathname}</div>
const ParamsExample = ({ match }) => <div>Route with param: {match.params.someParam}</div>
const Test = () => <div>Test</div>

export default () =>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/test">Test</Link></li>
    </ul>

    <Paths />
    <br />
    <Timer />
    <br />

    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/test" exact component={Test} />
      <Route path="/paramsExample/:someParam" component={ParamsExample} />
      <Route component={NoMatch} />
    </Switch>

  </div>
