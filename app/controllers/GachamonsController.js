import { AppState } from "../AppState.js";
import { gachamonsService } from "../services/GachamonsService.js";

export class GachamonsController {
  constructor() {
    // observers
    AppState.on('coins', this.toggleDisabledAttributeOnGachamonButton)
    AppState.on('activeGachamon', this.drawActiveGachamon)

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
    const gachamonDetailsElem = document.getElementById('activeGachamonDetails')
    gachamonDetailsElem.innerHTML = gachamon.detailsHTMLTemplate
  }

  toggleDisabledAttributeOnGachamonButton() {
    const gachamonButtonElem = document.getElementById('gachamonButton')
    const coins = AppState.coins
    if (coins > 0) {
      gachamonButtonElem.removeAttribute('disabled')
    }
    else {
      gachamonButtonElem.setAttribute('disabled', 'true')
    }
  }

  chooseGachamonToSetActive(gachamonName) {
    console.log(`You clicked on ${gachamonName}!`);
    gachamonsService.setActiveGachamon(gachamonName)
  }

  rollForGachamon() {
    gachamonsService.rollForGachamon()
  }
}