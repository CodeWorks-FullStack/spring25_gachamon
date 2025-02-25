import { CoinsController } from "./controllers/CoinsController.js"
import { GachamonsController } from "./controllers/GachamonsController.js"

class App {
  gachamonsController = new GachamonsController()
  coinsController = new CoinsController()
}

window['app'] = new App()