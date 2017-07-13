import React from "react"
import { inject, observer } from "mobx-react"

@inject ("routing")
@observer
export default class Paths extends React.Component {
  render () {
    // eslint-disable-next-line no-shadow
    const { location, push, goBack } = this.props.routing

    return (
      <div>

        <div>Current pathname: {location.pathname}</div>
        <button onClick={() => goBack ()}>Back</button>
        <button onClick={() => push ("/test")}>Set url to /test</button>

      </div>
    )
  }
}
