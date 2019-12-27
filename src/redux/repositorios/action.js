import {reposQuery} from '../../querys/repoQuery';
import cliente from '../../services/apollo';
export const SET_REPOS = 'SET_REPOS';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';
export const SET_FAVORITO = 'SET_FAVORITO';
//export const SET_FAVORITO = 'SET_FAVORITO';

export const setRepos = repos => ({
  type: SET_REPOS,
  payload: repos,
});

export const setIsFetching = isFetching => ({
  type: SET_IS_FETCHING,
  payload: isFetching,
});

export const setFavorito = id => ({
  type: SET_FAVORITO,
  payload: id,
});

/*Função que recebe um array de objetos e retorno um objeto contendo
os objetos do array.
*/
export function toObject(repos) {
  const reposObject = {};
  repos.forEach(
    repo =>
      (reposObject[repo.node.id] = {
        name: repo.node.name,
        collaborators: repo.node.collaborators.nodes,
        issues: repo.node.issues.totalCount,
        forkCount: repo.node.forkCount,
        primaryLanguage: repo.node.primaryLanguage,
        stargazers: repo.node.stargazers,
        url: repo.node.url,
        isFavorito: false,
      }),
  );
  return reposObject;
}

/*Função que faz uma chamada de api e com a resposta faz a chamada do
action setRepos para salvar no state da aplicação*/
export function getRepos() {
  return function fetching(dispatch, getState) {
    dispatch(setIsFetching(true));
    cliente
      .query({query: reposQuery})
      .then(response => {
        const repos = response.data.viewer.repositories.edges;
        dispatch(setRepos(toObject(repos)));
        dispatch(setIsFetching(false));
      })
      .catch(error => {
        dispatch(setIsFetching(false));
      });
  };
}
