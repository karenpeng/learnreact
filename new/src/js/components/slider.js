var React = require('react');

var Slider = React.createClass({
  getDefaultProps: function () {
    return {
      min: 0,
      max: 255
    }
  },
  prop
  render: function () {
    return ( < div >
      < input type = "range"
      ref = "range"
      min = {
        this.props.min
      }
      max = {
        this.props.max
      }
      /> < /div>
    );
  }

});

module.exports = Slider;