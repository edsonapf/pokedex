class ColorSelector {
  static getColorsByPokemonType(type: string) {
    switch (type){
			case 'FIGHTING':
				return {
					backgroundColor: '#e96963', color: '#9a3b31'
				};
			case 'FLYING':
				return {
					backgroundColor: '#00ffff', color: '#088787'
				};
			case 'POISON':
				return {
					backgroundColor: '#f7ec03', color: '#a39c06'
				};
			case 'GROUND':
				return {
					backgroundColor: "#ffcd82", color: "#98693d"
				};
			case 'ROCK':
				return {
					backgroundColor: '#693003', color: '#c05603'
				};
			case 'BUG':
				return {
					backgroundColor: '#51ff00', color: '#0f7603'
				};
			case 'GHOST':
				return {
					backgroundColor: '#cdcdcd', color: '#6c6c6c'
				};
			case 'STEEL':
				return {
					backgroundColor: '#b3adc3', color: '#5f6567'
				};
			case 'FIRE':
				return {
					backgroundColor: '#ff994c', color: '#702c0d'
				};
			case 'WATER':
				return {
					backgroundColor: '#8db3ff', color: '#203575'
				};
      case 'GRASS':
        return {
          backgroundColor: "#a8f082", color: "#669f4e"
        };		
			case 'ELECTRIC':
				return {
					backgroundColor: '#ffa600', color: '#a76e04'
				};
			case 'PSYCHIC':
				return {
					backgroundColor: '#ffd100', color: '#9c8414'
				};
			case 'ICE':
				return {
					backgroundColor: '#0087ff', color: '#01437e'
				};
			case 'DRAGON':
				return {
					backgroundColor: '#ffa200', color: '#bd5e24'
				};
			case 'DARK':
				return {
					backgroundColor: '#000', color: '#fff'
				};
			case 'FAIRY':
				return {
					backgroundColor: '#ff0074', color: '#790439'
				};
			case 'SHADOW':
				return {
					backgroundColor: '#4c4c4c', color: '#000'
				};
      default:
        return {
          backgroundColor: "#ff5350", color: "#fff"
        };        
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