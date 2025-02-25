export class Gachamon {
  constructor(gachamonName, gachamonEmoji, gachamonType, gachamonRarity) {
    this.name = gachamonName
    this.emoji = gachamonEmoji
    this.type = gachamonType
    this.rarity = gachamonRarity
  }

  name = ''
  emoji = ''
  type = ''
  rarity = 0

  get starEmojis() {
    let emojis = ''

    for (let i = 0; i < this.rarity; i++) {
      emojis += '⭐'
    }

    return emojis
  }

  // abstraction
  get listHTMLTemplate() {
    return `
    <div class="col-lg-2">
      <div onclick="app.gachamonsController.chooseGachamonToSetActive('${this.name}')" class="shadow text-light p-3 rounded gachamon-border mb-3 text-shadow ${this.type}" role="button" title="Click me to see details about ${this.name}">
        <div class="text-end fs-3 text-capitalize">
          <span>${this.name}</span>
        </div>
        <hr>
        <div class="text-center display-3">
          <span>${this.emoji}</span>
        </div>
      </div>
    </div>
    `
  }

  get detailsHTMLTemplate() {
    return `
    <div class="gachamon-border rounded p-3 mb-3 ${this.type}">
      <div class="text-end fs-1 text-shadow">
        <span>${this.name}</span>
      </div>
      <hr>
      <div class="text-center active-gachamon-emoji text-shadow">
        <span>${this.emoji}</span>
      </div>
      <div class="d-flex justify-content-between fs-3">
        <div class="rounded-pill bg-light px-4">${this.type}</div>
        <div class="text-shadow">${this.rarity}</div>
      </div>
      <div class="text-center fs-3 text-shadow">
        <span title="Rarity is ${this.rarity} stars">${this.starEmojis}</span>
      </div>
    </div>
    `
  }
}


// example of how to use class: new Gachamon('Barry ', '🦈', 'biter', 2)