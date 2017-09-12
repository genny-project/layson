import React, { Component } from 'react';
import { JSONLoader } from '../src/json-loader';
import { ComponentCollection } from '../src/component-collection';
import Button from './ButtonComponent';

class JSONLoaderTest extends Component {
  render() {
    const collection = new ComponentCollection({
      'Button': Button,
    });

    return (
      <JSONLoader componentCollection={collection} />
    );
  }
}

export default JSONLoaderTest;
