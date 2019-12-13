import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

// import { Container } from './styles';

export default class Repoitem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderPrimarylanguage = primaryLanguage => {
    if (primaryLanguage != null) {
      return <Text>{primaryLanguage.name}</Text>;
    }
    return null;
  }
  render() {
    const {
      name,
      description,
      stargazers,
      primaryLanguage,
      forkCount,
    } = this.props;
    return (
      <View style={{flex: 1, padding: 5}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{name}</Text>
        <Text numberOfLines={1}>{description}</Text>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star" type="antdesign" size={16} color="#5e6163" />
          <Text>{stargazers}</Text>
          <Text>Star today</Text>
          {this.renderPrimarylanguage(primaryLanguage)}
          <Icon name="fork" type="antdesign" size={16} color="#5e6163" />
          <Text>{forkCount}</Text>
        </View>
      </View>
    );
  }
}
