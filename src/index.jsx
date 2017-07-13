import React from "react"
import ReactDOM from "react-dom"
// hot reload
import { AppContainer } from "react-hot-loader"
// router history
import { createHashHistory } from "history"
import { RouterStore, syncHistoryWithStore } from "mobx-react-router"
// stores
import AppState from "stores/AppState"

// router history
const hashHistory = createHashHistory ()
const routingStore = new RouterStore ()
const routerHistory = syncHistoryWithStore (hashHistory, routingStore)

// stores
const stores = {
  "routing": routingStore,
  "appState": new AppState (),
}

const renderRoot = () => {
  const Root = require ("Root").default

  ReactDOM.render (
    <AppContainer>
      <Root stores={stores} routerHistory={routerHistory} />
    </AppContainer>
    , document.getElementById ("app")
  )
}
renderRoot ()

if (module.hot)
  module.hot.accept ("Root", renderRoot)
