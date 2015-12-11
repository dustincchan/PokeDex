var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var apiUtil = require('../../util/apiUtil');
var PokemonListItem = require('./pokemonIndexItem');

var ToysIndex = React.createClass({
  var toyIndexItem = this.props.toys.map( function ( toy ) {
    return <li></li>
  }
  render: function() {
    return (
      {}
    );
  }
});
