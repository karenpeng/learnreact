/** @jsx React.DOM */

var APP = require('./components/app');
console.log(APP);
var React = require('react');
console.log(APP);

React.render(<APP />, document.getElementById('main'));