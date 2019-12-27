import React from 'react';
import {Icon} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';

// Componente que rederiza o icon star com a quantidade de stars
const StarComponent = props => {
  const {starCount} = props;
  return (
    <View style={styles.container}>
      <Icon name="star" type="antdesign" size={16} color="#5e6163" />
      <Text style={styles.paddingItens}>{starCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 10,
  },
  paddingItens: {
    paddingHorizontal: 5,
  },
});

export default StarComponent;
