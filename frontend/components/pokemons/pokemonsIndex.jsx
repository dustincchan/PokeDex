var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var apiUtil = require('../../util/apiUtil');
var PokemonListItem = require('./pokemonIndexItem');

var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return ({pokemons: PokemonStore.all()});
  },
  _onChange: function() {
    this.setState({pokemons: PokemonStore.all()});
  },
  componentDidMount: function() {
    this.pokemonToken = PokemonStore.addListener(this._onChange);
    apiUtil.fetchAllPokemons();
  },
  componentWillUnmount: function() {
    this.pokemonToken.remove();
  },

  goToPokemon: function() {
    var pokemonUrl = "pokemon/" + this.state.pokemon.id;
    this.props.history.push(pokemonUrl);
  },

  render: function() {
    var pokeListItems = this.state.pokemons.map( function( pokemon, index ) {
      return <PokemonListItem name={pokemon.name} type={pokemon.poke_type}
        pokemonid={pokemon.id} key={index}/>;
    })

    return (
      <div>
        <ul>
          {pokeListItems}
        </ul>
      </div>
    );
  }
}
);

module.exports = PokemonsIndex;
