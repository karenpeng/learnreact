var ace = require('brace');
require('brace/mode/javascript');
require('brace/theme/monokai');

var React = require('react');

var editorminxin = React.createClass({

  var editor = ace.edit({
    this.state.divId
  });
  editor.getSession().setMode('ace/mode/javascript');
  editor.setTheme('ace/theme/monokai');

  render: function () {
    return ( < div / > );
  }

});

module.exports = editorminxin;