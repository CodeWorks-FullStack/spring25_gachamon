import { AppState } from "../AppState.js";

class GachamonsService {
  setActiveGachamon(name) {
    console.log(`Setting ${name} as the active gachamon`);
    const gachamons = AppState.gachamons

    const foundGachamon = gachamons.find(gachamon => gachamon.name == name)
    console.log('Here they are!', foundGachamon);

  }
}

// singleton (single instance of a class)
export const gachamonsService = new GachamonsService()