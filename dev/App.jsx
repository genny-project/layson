import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from '../src/Grid/grid';
import { JSONLoader } from '../src/json-loader';
import { ComponentCollection } from '../src/component-collection';
import Button from './ButtonComponent';
import layout from './layout.json';

class App extends Component {
  render() {
    const collection = new ComponentCollection({
      Grid,
      Button,
    });

    return <JSONLoader componentCollection={collection} layout={layout} />;
  }
}

ReactDOM.render( <App />, document.getElementById( 'root' ));
