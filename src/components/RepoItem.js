import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import StarComponent from './StarComponent';

//Componente recebe duas propriedades de um repositório (name, stargazers) e as renderiza
const RepoItem = props => {
  const {name, stargazers} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.fontSizeText} numberOfLines={1}>
        {name}
      </Text>
      <StarComponent starCount={stargazers} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingRight: 10,
    marginVertical: 10,
  },
  fontSizeText: {
    fontSize: 16,
  },
  marginRight: {
    marginRight: 20,
  },
});

export default RepoItem;
