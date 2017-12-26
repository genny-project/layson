import React, { Component } from 'react';
import { any, number, string, object } from 'prop-types';
import GridRow from './row';
import { View } from 'react-native';

class Grid extends Component {

  generateGrid(rows, cols) {

    const { children } = this.props;

    const layout = [];
    const limit = Array.isArray(rows) ? rows.length : rows;

    for (let i = 0; i < limit; i++) {

      let childs = React.Children.toArray(children);
      const rowChildren = childs.filter(child => {
        return child.props.position != undefined && child.props.position[0] == i;
      });

      let size = 1;
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
      <View className={`grid ${className}`} style={gridStyle} >{this.generateGrid(rows, cols)}</View>
    );
  }
}

export default Grid;
