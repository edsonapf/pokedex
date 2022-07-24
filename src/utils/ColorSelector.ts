class ColorSelector {
  // TODO: finish colors by pokemon type
  static getColorsByPokemonType(type: string) {
    switch (type){
      case 'GRASS':
        return {
          backgroundColor: "#A8F082", color: "#669F4E"
        }
      case 'GROUND':
        return {
          backgroundColor: "#FFCD82", color: "#98693D"
        }
      default:
        return {
          backgroundColor: "#fff", color: "#aaa"
        }        
    }
  }

  static getColorByStat(stat: string) {
    switch (stat) {
      case "hp":
        return "#df2140";
      case "attack":
        return "#ff994d";
      case "defense":
        return "#ffdc41";
      case "speed":
        return "#fb94a8";
      default:
        return '#fff'
    }
  }
}

export default ColorSelector;