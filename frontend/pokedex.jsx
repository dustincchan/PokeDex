var React = require('react');
var ReactDOM = require('react-dom');
var apiUtil = require('./util/apiUtil');
var PokemonStore = require('./stores/pokemon');
var PokemonsIndex = require('./components/pokemons/pokemonsIndex');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var App = require('./components/App.jsx');
var PokemonDetail = require('./components/pokemons/pokemonDetail');

var routes = (
  <Route path="/" component={App}>
    <Route path="pokemon/:pokemonid" component={PokemonDetail}> </Route>
  </Route>
)

document.addEventListener('DOMContentLoaded', function () {
  var content = document.querySelector('#root');
  ReactDOM.render(<Router>{routes}</Router> , content);
})
