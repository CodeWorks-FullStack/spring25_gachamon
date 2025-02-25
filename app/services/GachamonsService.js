class GachamonsService {
  setActiveGachamon(name) {
    console.log(`Setting ${name} as the active gachamon`);
  }
}

// singleton (single instance of a class)
export const gachamonsService = new GachamonsService()