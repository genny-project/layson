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
      
    const { position, children, ratio, ...rest } = this.props;

    let style = {};

    if(ratio){
      switch(ratio.constructor) {
        case Number: {
          style = {
            "flexGrow": ratio,
          };break;
        }

        case String: {
          style = {
            "flexGrow": 0,
            "flexShrink": 0,
            "flexBasis": ratio
          };
          break;
        }

        default: {
          null;
        }
      }
    }

    return (
      <div className="col"
          key={position}
          style={style}
          {...rest}>
        {children}
      </div>
    );
  }
}

export default GridCol;
