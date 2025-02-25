import { AppState } from "../AppState.js";
import { coinsService } from "./CoinsService.js";

class GachamonsService {
  rollForGachamon() {
    coinsService.decreaseCoins()

    let rarity = 5

    const randomNumber = Math.round(Math.random() * 100)

    if (randomNumber < 95) {
      rarity = 4
    }

    if (randomNumber < 80) {
      rarity = 3
    }

    if (randomNumber < 70) {
      rarity = 2
    }

    if (randomNumber < 50) {
      rarity = 1
    }

    console.log('random number is  ' + randomNumber);
    console.log('rarity is ' + rarity);


    const gachamons = AppState.gachamons.filter(gachamon => gachamon.rarity == rarity)

    const randomGachamonIndex = Math.floor(Math.random() * gachamons.length)

    const randomGachamon = gachamons[randomGachamonIndex]

    console.log('random gachamon', randomGachamon);

    AppState.activeGachamon = randomGachamon // triggers observer for 'activeGachamon'
  }

  setActiveGachamon(name) {
    console.log(`Setting ${name} as the active gachamon`);
    const gachamons = AppState.gachamons

    const foundGachamon = gachamons.find(gachamon => gachamon.name == name)

    console.log('before', AppState.activeGachamon);

    AppState.activeGachamon = foundGachamon // triggers observer for 'activeGachamon'

    console.log('after', AppState.activeGachamon);

  }
}

// singleton (single instance of a class)
export const gachamonsService = new GachamonsService()