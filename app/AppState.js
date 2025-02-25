import { Gachamon } from './models/Gachamon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  gachamons = [
    new Gachamon('oslo', '🦧', 'jumper', 1),
    new Gachamon('larry', '🦞', 'pincher', 1),
    new Gachamon('gary', '🐌', 'runner', 1),
    new Gachamon('barry', '🦈', 'biter', 2),
    new Gachamon('jerry', '🦒', 'biter', 2),
    new Gachamon('beary', '🐻', 'hibernator', 3),
    new Gachamon('kerry', '🦘', 'jumper', 4),
    new Gachamon('terry', '🦖', 'biter', 5)
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())