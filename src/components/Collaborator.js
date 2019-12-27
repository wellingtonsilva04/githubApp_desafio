import React from 'react';
import {ListItem} from 'react-native-elements';

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
