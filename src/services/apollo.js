import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {token} from '../config/token';

const httpLink = new createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {Authorization: `bearer ${token}`},
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
