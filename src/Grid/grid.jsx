import React, { Component } from 'react';

class Grid extends Component {

    layoutChildren() {
        console.log("Rendering children");
    }

    render() {
        return (
            <div>This grid contains {this.props.childrens.length} children</div>
        );
    }
}

Grid.defaultProps = {
    rows: 1,
    cols: 1,
    childrens: []
}

export default Grid;
