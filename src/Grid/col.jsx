import './grid.scss';
import React, { Component } from 'react';
import { array, any } from 'prop-types';

class GridCol extends Component {

  static propTypes = {
    position: array,
    children: any,
  }

  render() {
    const { position, children } = this.props;
    return (
      <div className="col" key={position}>
        {children}
      </div>
    );
  }
}

export default GridCol;
