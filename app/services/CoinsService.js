import { AppState } from "../AppState.js"

class CoinsService {
  increaseCoins() {
    AppState.coins++ // triggers our observers for 'coins'
    console.log('coins go up!', AppState.coins);
  }

  decreaseCoins() {
    AppState.coins-- // triggers our observers for 'coins'
    if (AppState.coins < 0) {
      AppState.coins = 0 // triggers our observers for 'coins'
    }
  }
}

export const coinsService = new CoinsService()