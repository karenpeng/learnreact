var React = require('react');
var Txt = require('./text');

var APP = React.createClass({

  render: function() {
    //console.log('hello?');
    return (
      <div>
      <h1>hello</h1>
      <Txt txt='oooop'/>
      </div>
    );
  }

});

module.exports = APP;