import React from 'react';

var Button = React.createClass({
  render: function () {
    return (
      <button className="btn btn-default">{this.props.text}</button>
    );
  }
});

module.exports = Button;
