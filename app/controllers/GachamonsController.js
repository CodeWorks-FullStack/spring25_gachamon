import { AppState } from "../AppState.js";

export class GachamonsController {
  constructor() {
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

  setActiveGachamon() {
    console.log('You clicked on the gachamon!');
  }
}