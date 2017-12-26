import React, { Component } from 'react';
import { number, any } from 'prop-types';
import { View } from 'react-native';

class Repeater extends Component {

  static propTypes = {
    count: number,
    children: any
  };

  render() {
    const { count, children } = this.props;
    const list = [];

    for( let i = 0; i < count; i++ ) {
      list.push(<View key={`${children.key}-${i}`}>{children}</View>);
    }

    return (
      <View>
        {list}
      </View>
    );
  }
}

export default Repeater;
