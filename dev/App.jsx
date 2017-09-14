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
            cols="3"
            rows="2"
            >
            <Button
                label="I am a button"
                position={[0,0]}
            />
        </Grid>
      </div>
    );
  }
}

ReactDOM.render( <App />, document.getElementById( 'root' ));
