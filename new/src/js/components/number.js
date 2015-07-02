var React = require('react');

var number = React.createClass({
  propTypes:{
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    val: React.PropTypes.number,
    update: React.PropTypes.oneOf(['number', 'range'])
  },
  getDefaultProps:function(){
    return{
      min: null,
      max: null,
      val: 0,
      step: 1,
      type: 'range'
    }
  }

  render: function() {
    return (
      <div>
        <input type=""
      </div>
    );
  }

});

module.exports = number;