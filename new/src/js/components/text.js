var React = require('react');

var TEXT = React.createClass({
  getDefaultProps: function () {
    return {
      txt: 'oop yeah'
    }
  },
  getInitialState: function () {
    return {
      txt: 'miao'
    }
  },
  propTypes: {
    txt: React.PropTypes.string
  },
  update: function (e) {
    //console.log(e.target.value)
    //this.props.txt = e.target.value;
    this.setState({
      txt: e.target.value
    })
  },
  render: function () {
    //console.log('hello?');
    return ( < div >
      < input type = "text"
      onChange = {
        this.update
      }
      /> < p > {
        this.state.txt
      } < /p> < p > {
        this.props.txt
      } < /p> < /div>
    );
    // return (
    //   <h1>world</h1>
    // );
  }

});

module.exports = TEXT;