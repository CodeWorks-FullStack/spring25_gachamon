import { AppState } from "../AppState.js";
import { gachamonsService } from "../services/GachamonsService.js";

export class GachamonsController {
  constructor() {
    // page load
    console.log('GACHA GACHA GACHAMON controller loaded');
    this.drawGachamonsList()
  }

  drawGachamonsList() {
    const gachamons = AppState.gachamons

    let gachamonListContent = ''
    gachamons.forEach(gachamon => gachamonListContent += gachamon.listHTMLTemplate)

    const gachamonnsListElem = document.getElementById('gachamonCardsSection')
    gachamonnsListElem.innerHTML = gachamonListContent
  }

  drawActiveGachamon() {
    const gachamon = AppState.activeGachamon
    console.log(`drawing for ${gachamon.name}`);
  }

  chooseGachamonToSetActive(gachamonName) {
    console.log(`You clicked on ${gachamonName}!`);
    gachamonsService.setActiveGachamon(gachamonName)
    this.drawActiveGachamon()
  }
}