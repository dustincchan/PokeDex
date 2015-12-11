var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _pokemons = [];

var Pokemons = new Store(AppDispatcher);

Pokemons.all = function() {
  return _pokemons;
};

var resetPokemons = function(pokeProps) {
  _pokemons = pokeProps;
  Pokemons.__emitChange();
};

Pokemons.find = function(pokemonId) {
  var soughtForPokemon = {};
  _pokemons.forEach( function( pokemon ) {
    if(pokemon.id === pokemonId ) {
      soughtForPokemon = pokemon;
      return;
    }
  });
  return {pokemon: soughtForPokemon};
};

Pokemons.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "POKEMONS_RECEIVED":
      resetPokemons(payload.pokemons);
      break;
    case "FIND_POKEMON":
      find(payload.pokemonId);
      break;
  }
};

module.exports = Pokemons;
