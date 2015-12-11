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

var resetSinglePokemon = function(newPokemon) {
  var noPokemon = true;
  var index = -1;
  _pokemons.forEach(function(pokemon, idx) {
    if( pokemon.id === newPokemon.id ) {
      index = idx;
      return;
    }
  });

  if ( index !== -1 ) {
    _pokemons[index] = newPokemon
  } else {
    _pokemons.push(newPokemon);
  }
  Pokemons.__emitChange();
};

Pokemons.find = function(pokemonId) {
  // debugger;
  var soughtForPokemon = {};
  _pokemons.forEach( function( pokemon ) {
    if(pokemon.id === pokemonId ) {
      soughtForPokemon = pokemon;
      return;
    }
  });
  return soughtForPokemon;
};

Pokemons.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "POKEMONS_RECEIVED":
      resetPokemons(payload.pokemons);
      break;
    case "SINGLE_POKEMON_RECEIVED":
      resetSinglePokemon(payload.pokemon);
      break;
  }
};

module.exports = Pokemons;
