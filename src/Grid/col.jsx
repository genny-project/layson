import React, { Component } from 'react';

class GridCol extends Component {

    render() {

        let children = this.props.children.length > 0 ? this.props.children : "Column #" + this.props.position;
        const colSize = this.props.ratio;
        const colStyle = {
            "flex-grow": 1
        };

        return (
            <div
                className="col"
                style={colStyle}
                >
                {children}
            </div>
        );
    }

}

export default GridCol;
