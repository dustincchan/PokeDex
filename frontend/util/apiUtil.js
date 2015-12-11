var ApiActions = require('../actions/pokemonActions');

var apiUtil = {
  fetchAllPokemons: function () {
    $.ajax({
      url: "api/pokemon",
      dataType: "json",
      success: function(data) {
        ApiActions.receiveAllPokemons(data);
      }
    })
  },
  receiveSinglePokemon: function(id) {
    $.ajax({
      url: "api/pokemon/" + id,
      dataType: "json",
      success: function(data) {
        ApiActions.receiveAllPokemons(data);
      }
    })
  }
}

module.exports = apiUtil;
