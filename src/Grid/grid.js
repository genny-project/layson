import React, { Component } from 'react';
import { any, number, string, object } from 'prop-types';
import GridRow from './row';

class Grid extends Component {

  static defaultProps = {
    className: ''
  }

  static propTypes = {
    children: any,
    rows: any,
    cols: any,
    className: string,
    style: object
  }

  generateGrid(rows, cols) {

    const { children } = this.props;

    const layout = [];
    const limit = Array.isArray(rows) ? rows.length : rows;

    for (let i = 0; i < limit; i++) {
      let childs = React.Children.toArray(children);
      const rowChildren = childs.filter(child => {
        return child.props.position != undefined && child.props.position[0] == i;
      });

      let size = null;
      let otherProps = {};

      switch(rows[i].constructor) {

        case Number: {
          size = 1;
          break;
        }

        case String: {
          size = rows[i];
          break;
        }

        case Object: {
          otherProps = rows[i];
          size = 1;
          break;
        }

        default: {
          console.error("Unknown value supplied for: 'Rows'.", "Value must be Number, String, or Object.");
          break;
        }
      } else {
        size = 1;
      }

      layout.push(
        <GridRow position={i} cols={cols} key={i} size={size} {...otherProps}>
          {rowChildren}
        </GridRow>
      );

    }
    return layout;
  }

  render() {
    const { rows, cols, className, style } = this.props;

    const gridStyle = {
      ...style,
      'display': 'flex',
      'flexDirection': 'column',
      'flexWrap': 'nowrap',
      'height': '100%',
    };

    return (
      <div className={`grid ${className}`} style={gridStyle} >{this.generateGrid(rows, cols)}</div>
    );
  }
}

export default Grid;
