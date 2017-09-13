import React, { Component } from 'react';
import GridCol from './col';

class GridRow extends Component {

    layoutCols(cols) {

        let layout = [];
        for (var i = 0; i < cols; i++) {
            layout.push(
                <GridCol
                    position={[this.props.position, i]}
                    number_of_cols_in_row={cols}
                />
            );
        }

        return layout;
    }

    render() {

        return (
            <div className="row">
                {this.layoutCols(this.props.cols)}
            </div>
        );
    }

}

export default GridRow;
