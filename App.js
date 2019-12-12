import React from 'react';
import Tabs from './src/config/routes';
import client from './src/services/apollo';
import {ApolloProvider} from '@apollo/react-hooks';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Tabs />
    </ApolloProvider>
  );
};

export default App;
