import React, { Component } from 'react';
import GridCol from './col';
import GridRow from './row';

class Grid extends Component {

    generateGrid(rows, cols) {

        let layout = [];
        for (let i = 0; i < rows; i++) {
            layout.push(<GridRow
                position={i}
                cols={cols}
            />);
        }

        console.log(this.props);


        return layout;
    }

    render() {

        return (
            <div>{this.generateGrid(this.props.rows, this.props.cols)}</div>
        );
    }
}

export default Grid;
