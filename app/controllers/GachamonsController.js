import { AppState } from "../AppState.js";

export class GachamonsController {
  constructor() {
    console.log('GACHA GACHA GACHAMON controller loaded');
    this.drawGachamonsList()
  }

  drawGachamonsList() {
    const gachamons = AppState.gachamons
    console.log('drawing gachamon!', gachamons);

    let gachamonListContent = ''
    gachamons.forEach(gachamon => gachamonListContent += gachamon.listHTMLTemplate)

    console.log(gachamonListContent);

    const gachamonnsListElem = document.getElementById('gachamonCardsSection')
    gachamonnsListElem.innerHTML = gachamonListContent
  }
}