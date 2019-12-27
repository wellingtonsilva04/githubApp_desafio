import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

//Componente que renderiza o favorito. Exibie um toggle e um text
export default function FavoritoComponent(props) {
  const {isOn, onColor, offColor, size, onToggle} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textFavorito}>{isOn ? 'Favorito' : 'Favoritar'}</Text>
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
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column-reverse',
  },
  textFavorito: {
    fontSize: 12,
  },
});
