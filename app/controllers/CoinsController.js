import { AppState } from "../AppState.js";
import { coinsService } from "../services/CoinsService.js";

export class CoinsController {
  constructor() {
    AppState.on('coins', this.drawCoins)

    console.log('Coins controller is ready!');
  }

  drawCoins() {
    const coins = AppState.coins
    const coinsElem = document.getElementById('coinCount')
    coinsElem.innerText = `Coins: ${coins}`
  }

  addCoin() {
    console.log('adding coin');
    coinsService.increaseCoins()
  }
}