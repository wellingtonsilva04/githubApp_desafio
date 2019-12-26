import React, {Component} from 'react';
import {ListItem} from 'react-native-elements';

// import { Container } from './styles';

export default class Collaborator extends Component {
  render() {
    const {login, avatarUrl} = this.props;
    return (
      <ListItem
        leftAvatar={{
          source: {uri: avatarUrl},
        }}
        title={login}
      />
    );
  }
}
