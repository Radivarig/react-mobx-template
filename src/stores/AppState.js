import { observable } from "mobx"

export default class AppState {
  @observable timer: number

  constructor () {
    this.timer = 0

    setInterval (() => {
      this.timer += 1
    }, 1000)

  }

  resetTimer = () => {
    this.timer = 0
  }
}
