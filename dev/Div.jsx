import React, { Component } from 'react';

class Div extends Component {
  render() {
    const props = {
      ...this.props,
      children: null,
    };

    delete props.children;

    return (
      <div>
        <p>{JSON.stringify( props )}</p>
        {this.props.children}
      </div>
    );
  }
}

export default Div;
