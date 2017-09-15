import './grid.scss';
import React, { Component } from 'react';
import { any, number } from 'prop-types';
import GridCol from './col';

class GridRow extends Component {
  static propTypes = {
    children: any,
    position: number,
    cols: number,
  };

  layoutCols(cols) {
    const { children, position } = this.props;
    const layout = [];
    for (let i = 0; i < cols; i++) {

      let childs = React.Children.toArray(children);
      const colChildren = childs.filter(child => {
        return child.props.position != undefined && child.props.position[1] == i;
      });

      layout.push(
        <GridCol key={`${position}${i}`} position={[position, i]}>
            {colChildren}
        </GridCol>
        );
    }

    return layout;
  }

  render() {
    const { cols } = this.props;

    return (
        <div className="row">
          {this.layoutCols(cols)}
        </div>
    );
  }
}

export default GridRow;
