import './grid.scss';
import React, { Component } from 'react';
import GridCol from './col';

class GridRow extends Component {

    layoutCols(cols) {

        let layout = [];
        for (var i = 0; i < cols; i++) {

            let childs = React.Children.toArray(this.props.children);
            const colChildren = childs.filter(child => {
                return child.props.position != undefined && child.props.position[1] == i;
            });

            layout.push(
                <GridCol
                    position={[this.props.position, i]}
                >
                    {colChildren}

                </GridCol>
            );
        }

        return layout;
    }

    render() {

        return (
            <div
                className="row"
                >
                {this.layoutCols(this.props.cols)}
            </div>
        );
    }

}

export default GridRow;
