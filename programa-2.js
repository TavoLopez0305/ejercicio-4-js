// Arreglo de Pokémon
const pokemons = [
    { numero: 1, nombre: "Bulbasaur" },
    { numero: 2, nombre: "Ivysaur" },
    // ... otros Pokémon ...
    { numero: 151, nombre: "Mew" },
  ];
  
  const numeroUsuario = parseInt(prompt("Por favor, ingresa un número:"));
  
  for (let i = 1; i <= numeroUsuario; i++) {
    if (i % 5 === 0 && i <= pokemons.length) {
      console.log(pokemons[i - 1].nombre);
    }
  }
  