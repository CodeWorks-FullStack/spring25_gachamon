import { AppState } from "../AppState.js";

class GachamonsService {
  setActiveGachamon(name) {
    console.log(`Setting ${name} as the active gachamon`);
    const gachamons = AppState.gachamons

    const foundGachamon = gachamons.find(gachamon => gachamon.name == name)

    console.log('before', AppState.activeGachamon);

    AppState.activeGachamon = foundGachamon

    console.log('after', AppState.activeGachamon);

  }
}

// singleton (single instance of a class)
export const gachamonsService = new GachamonsService()