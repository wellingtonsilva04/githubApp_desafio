import React, {Component} from 'react';

import {View, Text} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
// import { Container } from './styles';

export default class FavoritoComponent extends Component {
  render() {
    const {isOn, onColor, offColor, size, onToggle} = this.props;
    return (
      <View style={{alignItems: 'center'}}>
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
