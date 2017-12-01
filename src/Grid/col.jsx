import './grid.scss';
import React, { Component } from 'react';
import { array, number, any } from 'prop-types';

class GridCol extends Component {

  static propTypes = {
    position: array,
    children: any,
    ratio: any,
  }

  render() {
      
    const { position, children, ratio, overflow } = this.props;

    let style = {};

    if (Number.isInteger(ratio)) {
      style = {
        "flexGrow": ratio,
        "overflow": overflow,
      };
    } else {
      style = {
        "flexGrow": 0,
        "flexShrink": 0,
        "flexBasis": ratio,
        "overflow": overflow,
      };
    }

    return (
      <div className="col"
          key={position}
          style={style}>
        {children}
      </div>
    );
  }
}

export default GridCol;
