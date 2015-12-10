var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _pokemons = {};

var Pokemons = new Store(AppDispatcher);

Pokemons.all = function() {
  return Object.keys(_pokemons);
};

var resetPokemons = function(pokeProps) {
  _pokemons = pokeProps;
};

Pokemons.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "POKEMONS_RECEIVED":
      resetPokemons(payload.pokemons);
      break;
  }
};

module.exports = Pokemons;
