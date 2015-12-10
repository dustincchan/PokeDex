var Dispatcher = require('../dispatcher/disptacher');
var PokemonConstants = require('../constants/pokemonConstants.js');

var pokemonActions = {
  receiveAllPokemons: function(data) {

      Dispatcher.dispatch({actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: data});
  }
}

module.exports = pokemonActions;
