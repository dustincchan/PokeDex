var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants.js');

var ApiActions = {
  receiveAllPokemons: function(data) {

      Dispatcher.dispatch({actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: data});
  }

};

module.exports = ApiActions;
