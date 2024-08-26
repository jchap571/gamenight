import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Player } from "./models/player.js"

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
  players = [
    new Player("Aesop"),
    new Player("Slug"),
    new Player("Mikey"),
    new Player("Robbie"),
    new Player("George"),
    new Player("Roger"),

  ];

}

export const AppState = createObservableProxy(new ObservableAppState())


