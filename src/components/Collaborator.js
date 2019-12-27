import React from 'react';
import {ListItem} from 'react-native-elements';

//Componte que recebe o login e avatrr e retona como elemento da lista
const Collaborator = props => {
  const {login, avatarUrl} = props;
  return (
    <ListItem
      leftAvatar={{
        source: {uri: avatarUrl},
      }}
      title={login}
    />
  );
};

export default Collaborator;
