var React = require('react');
var ReactDOM = require('react-dom');
apiUtil = require('./util/apiUtil');
PokemonStore = require('./stores/pokemon');

document.addEventListener('DOMContentLoaded', function () {
  var content = document.querySelector('#root');
  ReactDOM.render(<div>Hello</div>, content);
})
