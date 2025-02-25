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
  amountInInventory = 0

  // abstraction
  get listHTMLTemplate() {
    return `
    <div class="col-lg-2">
      <div class="shadow bg-primary text-light p-3 rounded gachamon-border mb-3">
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
}


// example of how to use class: new Gachamon('Barry ', '🦈', 'biter', 2)