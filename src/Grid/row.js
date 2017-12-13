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

      let size = null;
      let objectType = typeof cols[i];
      let otherProps = {};

      switch(cols[i].constructor) {
        case Number: {
          size = 1;
          break;
        }

        case String: {
          size = cols[i];
          break;
        }

        case Object: {
          otherProps = cols[i];
          size = 1;
          break;        
        }

        default: {
          console.error("Unknown value supplied for: 'Cols'.", "Value must be Number, String, or Object.");
        }
      }

      layout.push(
        <GridCol
          key={`${position}${i}`}
          position={[position, i]}
          ratio={ratio}
          {...otherProps}>
          {colChildren}
        </GridCol>
      );
    }
    
    return layout;
  }
  render() {
    
    const { cols, size, position, children, ...rest} = this.props;

    let style = {};
    
    if (size){
      switch(size.constructor) {
        case Number: {
          style = {
            'flexGrow': size,
          };
          break;
        }

        case String: {
          if ( size == 'auto') {
            style = {
              'flexGrow': 1,
              'flexShrink': 1,
              'flexBasis': 'auto',
            };
          } else {
            style = {
              'flexGrow': 0,
              'flexShrink': 0,
              'flexBasis': size,
            };
          }
          break;
        }
        
        default: {
          null
        }
      }
    }

    return (
      <div {...rest} style={{...style, ...rest.style}} className={`row ${rest.className || ''}`} >
        {this.layoutCols(cols)}
      </div>
    );
  }
}

export default GridRow;
