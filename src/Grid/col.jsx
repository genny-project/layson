import './grid.scss';
import React, { Component } from 'react';

class GridCol extends Component {

    render() {

        return (
            <div
                className="col"
                key={this.props.position}
                >
                {this.props.children}
            </div>
        );
    }

}

export default GridCol;
