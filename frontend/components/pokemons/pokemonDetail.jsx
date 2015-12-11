var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var apiUtil = require('../../util/apiUtil');

var PokemonDetail = React.createClass({
  getInitialState: function() {
    var pokemonId = parseInt(this.props.params.pokemonid);
    var pokemon = this.getStateFromStore(pokemonId).pokemon;
    return (
      {pokemon: pokemon}
    );
  },
  getStateFromStore: function(pokemonId) {
    return PokemonStore.find(pokemonId);
  },
  componentWillReceiveProps: function() {

  },
  render: function() {
    var outputDiv;
    if(typeof this.state.pokemon === "undefined") {
      outputDiv = <div className="detail"></div>;
    } else {
      outputDiv = (<div className="detail">
                    {this.state.pokemon.name}
                    <img src={this.state.pokemon.image_url} alt={this.state.pokemon.name} />
                  </div>);
    }

    return (
      <div>
        <div className="pokemon-detail-pane">
          {outputDiv}
        </div>
      </div>
    );
  }
});

module.exports = PokemonDetail;
