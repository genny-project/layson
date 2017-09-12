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

  renderComponent( type, props ) {
    const { componentCollection } = this.props;
    /* Get the component from the component collection */
    const component = componentCollection.get( type );

    if ( !component ) {
      console.warn( `Could not find component with name ${type}` );
      return null;
    }

    return React.createElement( component, props, props.children );
  }

  render() {
    return (
      <div>
        {this.renderComponent( 'Test', {})}
      </div>
    );
  }
}

export default JSONLoader;
