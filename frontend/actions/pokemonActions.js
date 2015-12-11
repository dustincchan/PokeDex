var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants.js');

var ApiActions = {
  receiveAllPokemons: function(data) {
      Dispatcher.dispatch({actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: data});
  },

  receiveSinglePokemon: function(data) {
    Dispatcher.dispatch({actionType: PokemonConstants.SINGLE_POKEMON_RECEIVED,
    pokemon: data});
  }
};

module.exports = ApiActions;
