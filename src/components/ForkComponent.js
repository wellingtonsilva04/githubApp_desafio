import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export default class ForkComponent extends Component {
  render() {
    const {forkCount} = this.props;
    return (
      <View style={styles.container}>
        <Icon
          style={styles.iconFork}
          name="fork"
          type="antdesign"
          size={16}
          color="#5e6163"
        />
        <Text style={styles.textFork}>{forkCount}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconFork: {
    paddingHorizontal: 5,
  },
  textFork: {
    paddingHorizontal: 5,
  },
});
