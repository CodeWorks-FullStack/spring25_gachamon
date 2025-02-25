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
}

// example of how to use class: new Gachamon('Barry ', '🦈', 'biter', 2)