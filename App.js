import React from 'react';
import Tabs from './src/config/routes';
import client from './src/services/apollo';
import {ApolloProvider} from '@apollo/react-hooks';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Tabs />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
