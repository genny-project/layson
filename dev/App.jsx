import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from '../src/Grid/grid';
import JSONLoaderTest from './JSONLoaderTest';
import Button from './ButtonComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Grid
            rows='2'
            cols='2'
            childrens={[
                <Button />
            ]}
        />
        <JSONLoaderTest />
      </div>
    );
  }
}

ReactDOM.render( <App />, document.getElementById( 'root' ));
