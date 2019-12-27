import React from 'react';
import {FlatList} from 'react-native';
import {Divider} from 'react-native-elements';
import Collaborator from './Collaborator';

//Componente recebe uma lista de colaboradores de um repositório e a renderiza.
const ListCollaborators = props => {
  const {collaborators} = props;
  return (
    <FlatList
      data={collaborators}
      ItemSeparatorComponent={() => <Divider />}
      renderItem={({item}) => (
        <Collaborator login={item.login} avatarUrl={item.avatarUrl} />
      )}
    />
  );
};

export default ListCollaborators;
