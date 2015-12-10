var React = require('react');
var ReactDOM = require('react-dom');
var apiUtil = require('./util/apiUtil');

document.addEventListener('DOMContentLoaded', function () {
  var content = document.querySelector('#root');
  ReactDOM.render(<div>Hello</div>, content);
})
