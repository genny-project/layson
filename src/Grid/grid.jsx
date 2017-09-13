import React, { Component } from 'react';

class Grid extends Component {

    layoutChildren() {

        let children = this.props.children;
        return children.length;
    }

    render() {
        return (
            <div>This grid contains {this.layoutChildren()} children</div>
        );
    }
}

export default Grid;
