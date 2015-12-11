var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var apiUtil = require('../../util/apiUtil');

var PokemonDetail = React.createClass({
  getInitialState: function() {
    var pokemonId = parseInt(this.props.params.pokemonid);
    var pokemon = this.getStateFromStore(pokemonId);

    return (
      {pokemon: pokemon}
    );
  },
  getStateFromStore: function(pokemonId) {
    return PokemonStore.find(pokemonId);
  },
  componentDidMount: function () {
    this.propsToken = PokemonStore.addListener(this.storeChanged);
    // apiUtil.receiveSinglePokemon(parseInt(this.props.params.pokemonid));
  },
  storeChanged: function() {
    var id = parseInt(this.props.params.pokemonid);
    this.setState(
      {
        pokemon: this.getStateFromStore(id)
      }
    );
  },
  componentWillReceiveProps: function(newProps) {
    var pokemonId = parseInt(newProps.params.pokemonid);
    var pokemon = this.getStateFromStore(pokemonId);
    this.setState({pokemon: pokemon});
  },
  componentWillUnmount: function() {
    this.propsToken.remove();
  },
  render: function() {
    var outputDiv;
    if(typeof this.state.pokemon === "undefined") {
      outputDiv = <div className="detail"></div>;
    } else {
      outputDiv = (<div className="detail">
                    {this.state.pokemon.name}
                    <img src={this.state.pokemon.image_url}></ img>
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
