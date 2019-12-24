import gql from 'graphql-tag';
export const reposQuery = gql`
  query {
    viewer {
      repositories(
        orderBy: {field: NAME, direction: ASC},
        affiliations: COLLABORATOR,
        first: 50
      ) {
        edges {
          node {
            id
            description
            forkCount
            collaborators {
              nodes {
                login
                avatarUrl(size: 100)
              }
            }
            name
            primaryLanguage {
              name
            }
            stargazers {
              totalCount
            }
            issues(filterBy: {states: OPEN}) {
              totalCount
            }
            url
          }
        }
      }
    }
  }
`;
