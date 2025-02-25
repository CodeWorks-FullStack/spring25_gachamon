import { AppState } from "../AppState.js"

class CoinsService {
  increaseCoins() {
    AppState.coins++
    console.log('coins go up!', AppState.coins);
  }

}

export const coinsService = new CoinsService()