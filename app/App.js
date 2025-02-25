import { GachamonsController } from "./controllers/GachamonsController.js"

class App {
  gachamonsController = new GachamonsController()
}

window['app'] = new App()