import { Gachamon } from './models/Gachamon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  coins = 0

  gachamons = [
    new Gachamon('oslo', '🦧', 'jumper', 1),
    new Gachamon('larry', '🦞', 'pincher', 1),
    new Gachamon('gary', '🐌', 'runner', 1),
    new Gachamon('dairy', '🐄', 'hibernator', 1),
    new Gachamon('barry', '🦈', 'biter', 2),
    new Gachamon('jerry', '🦒', 'biter', 2),
    new Gachamon('beary', '🐻', 'hibernator', 3),
    new Gachamon('kerry', '🦘', 'jumper', 4),
    new Gachamon('mary', '🐎', 'runner', 4),
    new Gachamon('terry', '🦖', 'biter', 5)
  ]

  // NOTE this line types whatever is below it as a Gachamon object
  /*** @type {Gachamon} */
  // NOTE there is no active gachamon on page load
  activeGachamon = null
}

export const AppState = createObservableProxy(new ObservableAppState())