import { AppState } from "../AppState.js"

class CoinsService {
  increaseCoins() {
    AppState.coins++ // triggers our observers for 'coins'
    console.log('coins go up!', AppState.coins);
  }

  decreaseCoins() {
    AppState.coins--
    if (AppState.coins < 0) {
      AppState.coins = 0
    }
  }
}

export const coinsService = new CoinsService()