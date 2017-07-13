import React from "react"
import { inject, observer } from "mobx-react"

@inject ("appState")
@observer
export default class App extends React.Component {
  render () {
    const { timer, resetTimer } = this.props.appState

    return (
      <div>

        <div>timer:{timer}</div>
        <button onClick={resetTimer}>reset</button>

      </div>
    )
  }
}
