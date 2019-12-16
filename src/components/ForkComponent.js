import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

export default class ForkComponent extends Component {
  render() {
    const {forkCount} = this.props;
    return (
      <View style={{flexDirection: 'row'}}>
        <Icon
          style={{paddingHorizontal: 5}}
          name="fork"
          type="antdesign"
          size={16}
          color="#5e6163"
        />
        <Text style={{paddingHorizontal: 5}}>{forkCount}</Text>
      </View>
    );
  }
}
