import React from 'react';
import {View, Text} from 'react-native';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';

function Trending(props) {
  const {loading, error, data} = useQuery(reposQuery);
  console.log(data);
  console.log(error);
  if (loading) return <Text>Carregando...</Text>;
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
const reposQuery = gql`
  query {
    user(login: "wellingtonsilva04") {
      avatarUrl
      repositories(affiliations: OWNER, first: 10) {
        edges {
          node {
            id
            collaborators(affiliation: OUTSIDE) {
              edges {
                node {
                  id
                  login
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Trending;
