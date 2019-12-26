import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {Divider} from 'react-native-elements';
import Collaborator from './Collaborator';

// import { Container } from './styles';

export default class ListCollaborators extends Component {
  render() {
    const {collaborators} = this.props;
    return (
      <View>
        <FlatList
          data={collaborators}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({item}) => {
            return (
              <Collaborator login={item.login} avatarUrl={item.avatarUrl} />
            );
          }}
        />
      </View>
    );
  }
}
