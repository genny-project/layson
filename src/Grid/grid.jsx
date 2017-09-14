import React, { Component } from 'react';
import GridCol from './col';
import GridRow from './row';

class Grid extends Component {

    generateGrid(rows, cols) {

        let layout = [];
        for (let i = 0; i < rows; i++) {

            let childs = React.Children.toArray(this.props.children);
            const rowChildren = childs.filter(child => {
                return child.props.position != undefined && child.props.position[0] == i;
            });

            layout.push(
                <GridRow
                    position={i}
                    cols={cols}
                >
                    {rowChildren}
                </GridRow>
            );
        }

        return layout;
    }

    render() {

        return (
            <div>{this.generateGrid(this.props.rows, this.props.cols)}</div>
        );
    }
}

export default Grid;
