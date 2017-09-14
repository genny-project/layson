import React, { Component } from 'react';
import GridCol from './col';

class GridRow extends Component {

    layoutCols(cols) {

        let layout = [];
        for (var i = 0; i < cols; i++) {

            let childs = React.Children.toArray(this.props.children);
            const colChildren = childs.filter(child => {
                return child.props.position != undefined && child.props.position[0] == i;
            });

            layout.push(
                <GridCol
                    position={[this.props.position, i]}
                    ratio={100/cols}
                >
                    {colChildren}

                </GridCol>
            );
        }

        return layout;
    }

    render() {

        const style = {
            "flexWrap": "wrap",
            "display": "flex",
            "justifyContent": "space-evenly"
        };

        return (
            <div
                className="row"
                style={style}
                >
                {this.layoutCols(this.props.cols)}
            </div>
        );
    }

}

export default GridRow;
