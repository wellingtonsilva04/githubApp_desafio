import gql from 'graphql-tag';
export const reposQuery = gql`
  query {
    viewer {
      repositories(affiliations: COLLABORATOR, first: 30) {
        edges {
          node {
            id
            description
            forkCount
            collaborators {
              nodes {
                name
                login
                url
              }
            }
            name
            primaryLanguage {
              name
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;
