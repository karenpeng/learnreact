/** @jsx React.DOM */
var React = require('react');
var APP = require('./components/app');
var TEXT = require('./components/text');
var Butt = require('./components/button')

require('./components/hierarchy');

React.render(<APP />, document.getElementById('main'));

// React.render(<TEXT />, document.body);

React.render(<Butt />, document.getElementById('wat'));

