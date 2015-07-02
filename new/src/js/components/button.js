var React = require('react');

var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <button onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </button>
    );
  }
});

module.exports = LikeButton;

