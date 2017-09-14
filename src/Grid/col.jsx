import React, { Component } from 'react';
import GridStyle from './grid.scss';

class GridCol extends Component {

    render() {

        let children = this.props.children.length > 0 ? this.props.children : "Column #" + this.props.position;
        const colSize = this.props.ratio;

        return (
            <div
                className={GridStyle.col}
                key={this.props.position}
                >
                {children}
            </div>
        );
    }

}

export default GridCol;
