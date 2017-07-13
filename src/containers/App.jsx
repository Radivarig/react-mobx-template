import React from "react"
import { inject, observer } from "mobx-react"

@inject ("appState")
@observer
export default class App extends React.Component {
  render () {
    const { timer } = this.props.appState
    return (
      <div>
        App, timer: {timer}
      </div>
    )
  }
}
