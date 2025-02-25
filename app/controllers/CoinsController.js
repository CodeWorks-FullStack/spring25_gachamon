import { coinsService } from "../services/CoinsService.js";

export class CoinsController {
  constructor() {
    console.log('Coins controller is ready!');
  }

  addCoin() {
    console.log('adding coin');
    coinsService.increaseCoins()
  }
}