export const isRainbow = (colors: string[]): void => {
  for (let color in colors) {
    switch (colors[color]) {
      case 'rojo':
        console.log(`${color} es del arcoiris!`);
        break;
      case 'naranja':
        console.log(`${color} es del arcoiris!`);
        break;
      case 'amarillo':
        console.log(`${color} es del arcoiris!`);
        break;
      case 'verde':
        console.log(`${color} es del arcoiris!`);
        break;
      case 'cian':
        console.log(`${color} es del arcoiris!`);
        break;
      case 'azul':
        console.log(`${color} es del arcoiris!`);
        break;
      case 'violeta':
        console.log(`${color} es del arcoiris!`);
        break;
      default: console.log(`${color} no es del arcoiris :(`);

    }
  }
}

isRainbow(['rojo', 'azul', 'magenta', 'rosa', 'amarillo', 'azul'])