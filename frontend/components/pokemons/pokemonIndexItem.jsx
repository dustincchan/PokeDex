var React = require('react');
var pokemonDetail = require('./pokemonDetail');
var History = require('react-router').History;

var PokemonIndexItem = React.createClass({
  mixins: [History],
  showDetail: function() {
    var pokemonDetailUrl = "pokemon/" + this.props.pokemonid;
    this.history.push(pokemonDetailUrl);
  },
  render: function() {
    return (
      <li className="poke-list-item" id={this.props.index}
        onClick={this.showDetail}>
        Name: {this.props.name} Poke Type:  {this.props.type}
      </li>
     );
  }

});

module.exports = PokemonIndexItem;
