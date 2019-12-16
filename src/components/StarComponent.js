import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';

// Componente que rederiza o icon star

export default class StarComponent extends Component {
  render() {
    const {starCount} = this.props;
    return (
      <View style={styles.container}>
        <Icon name="star" type="antdesign" size={16} color="#5e6163" />
        <Text style={styles.paddingItens}>{starCount}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 10,
  },
  paddingItens: {
    paddingHorizontal: 5,
  },
});
