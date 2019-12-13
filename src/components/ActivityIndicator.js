import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

// import { Container } from './styles';

export default function ActiviIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
  },
});
