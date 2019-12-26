import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import StarComponent from './StarComponent';

export default class Repoitem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /*Função renderiza a propriedade primaryLanguage de um repositório. Retorna null
  caso a mesma seja null
  */
  renderPrimarylanguage = primaryLanguage => {
    if (primaryLanguage != null) {
      return <Text style={styles.marginRight}>{primaryLanguage.name}</Text>;
    }
    return null;
  };

  /*Função renderiza a propriedade description de um repositório. Retorna null
  caso o mesmo seja null
  */
  renderDescription = description => {
    if (description != null) {
      return <Text numberOfLines={1}>{description}</Text>;
    }
    return null;
  };

  render() {
    const {name, stargazers} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.fontSizeText} numberOfLines={1}>
          {name}
        </Text>
        <StarComponent starCount={stargazers} />
      </View>
    );
  }
}
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
