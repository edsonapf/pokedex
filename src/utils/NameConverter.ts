class NameConverter {
  static convertStatName(statName: string) {
    switch (statName) {
      case "hp":
        return "HP";
      case "attack":
        return "ATK";
      case "defense":
        return "DEF";
      case "speed":
        return "SPD";
      default:
        return 'TTL'
    }
  }
}

export default NameConverter;