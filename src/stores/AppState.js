import { observable } from "mobx"

export default class AppState {
  @observable timer: number
  @observable issues: Array<Object>

  constructor () {
    this.timer = 0
    this.issues = []

    setInterval (() => {
      this.timer += 1
    }, 1000)

  }

  resetTimer = () => {
    this.timer = 0
  }
}
