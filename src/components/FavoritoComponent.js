import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

export default class FavoritoComponent extends Component {
  render() {
    const {isOn, onColor, offColor, size, onToggle} = this.props;
    return (
      <View style={styles.container}>
        <Text>{isOn ? 'Favorito' : 'Favoritar'}</Text>
        <ToggleSwitch
          isOn={isOn}
          onColor={onColor}
          offColor={offColor}
          size={size}
          onToggle={onToggle}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
