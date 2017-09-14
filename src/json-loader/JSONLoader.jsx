import React, { Component } from 'react';
import { object } from 'prop-types';
import { ComponentCollection } from '../component-collection';

class JSONLoader extends Component {
  static propTypes = {
    layout: object,
    componentCollection: object,
  }

  static defaultProps = {
    layout: {},
    componentCollection: new ComponentCollection(),
  }

  renderChildren( data ) {
    if ( !data ) {
      return null;
    }

    const children = [];

    data.forEach( d => {
      children.push( this.renderComponent( Object.keys(d)[0], d[Object.keys(d)[0]]) );
    });

    if ( children.length === 0 ) {
      return null;
    }

    if ( children.length === 1 ) {
      return children[0];
    }

    return children;
  }

  renderComponent( type, data ) {
    /* Get the data */
    const props = data;
    const children = data.children;

    /* Get the component collection */
    const { componentCollection } = this.props;

    /* Get the component from the component collection */
    const component = componentCollection.get( type );

    /* Show a warning if the component doesn't exist in the component collection */
    if ( !component ) {
      console.warn( `Could not find component with name ${type}` );
      return null;
    }

    /* Create  the element */
    return React.createElement( component, props, this.renderChildren( children ));
  }

  render() {
    const { layout } = this.props;

    return (
      <div>
        {this.renderChildren( layout.layout )}
      </div>
    );
  }
}

export default JSONLoader;
