import './grid.scss';
import React, { Component } from 'react';
import { any, number } from 'prop-types';
import GridCol from './col';

class GridRow extends Component {
  static propTypes = {
    children: any,
    position: number,
    cols: any,
  };

  layoutCols(cols) {

    const { children, position, ratio, size } = this.props;

    const layout = [];
    const limit = Array.isArray(cols) ? cols.length : cols;

    for (let i = 0; i < limit; i++) {
      let childs = React.Children.toArray(children);
      const colChildren = childs.filter(child => {
        return child.props.position != undefined && child.props.position[1] == i;
      });

      const ratio = Array.isArray(cols) ? cols[i] : 1;

      const overflow = Number.isInteger(size) ? 'hidden' : size == 'auto' ? 'scroll' : 'hidden';

      layout.push(
        <GridCol
            key={`${position}${i}`}
            position={[position, i]}
            ratio={ratio}
            overflow={overflow}>
          {colChildren}
        </GridCol>
        );
    }
    
    return layout;
  }

  render() {
    
    const { cols, size } = this.props;

    let style = {};

    if (Number.isInteger(size)) {
      style = {
        "flexGrow": size,
      };
    } else {
      if ( size == 'auto') {
        style = {
          "flexGrow": 1,
          "flexShrink": 1,
          "flexBasis": 'auto',
        };
      } else {
        style = {
          "flexGrow": 0,
          "flexShrink": 0,
          "flexBasis": size,
        };
      }
    }

    return (
        <div className="row" style={style}>
          {this.layoutCols(cols)}
        </div>
    );
  }
}

export default GridRow;
