import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GridTest from './GridTest';
import JSONLoaderTest from './JSONLoaderTest';

class App extends Component {
  render() {
    return (
      <div>
        <GridTest />
        <JSONLoaderTest />
      </div>
    );
  }
}

ReactDOM.render( <App />, document.getElementById( 'root' ));
