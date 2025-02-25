import { AppState } from "../AppState.js"

class CoinsService {
  increaseCoins() {
    AppState.coins++ // triggers our observers for 'coins'
    console.log('coins go up!', AppState.coins);
  }

}

export const coinsService = new CoinsService()