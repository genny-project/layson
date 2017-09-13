import React, { Component } from 'react';

class GridCol extends Component {

    render() {

        const colSize = 12 / this.props.number_of_cols_in_row;
        const colName = "col-xs-" + colSize;

        return (
            <div className={colName}>
                Col: {this.props.position}
            </div>
        );
    }

}

export default GridCol;
