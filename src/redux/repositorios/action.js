import React from 'react';
import {reposQuery} from '../../screens/querys/repoQuery';
import cliente from '../../services/apollo';
export const SET_REPOS = 'SET_REPOS';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';
//export const SET_FAVORITO = 'SET_FAVORITO';

export const setRepos = repos => ({
  type: SET_REPOS,
  payload: repos,
});

export const setIsFetching = isFetching => ({
  type: SET_IS_FETCHING,
  payload: isFetching,
});

export function setFavorito(id) {
  return function(dispatch, getState) {
    const state = getState();
    const {repos} = state.reposReducer;
    repos[id].isFvorito = !repos[id].isFvorito;
    dispatch(setRepos(repos));
  };
}
export function getRepos() {
  return function fetching(dispatch, getState) {
    dispatch(setIsFetching(true));
    cliente
      .query({query: reposQuery})
      .then(response => {
        const repos = response.data.viewer.repositories.edges;
        dispatch(setRepos(repos.map(repo => ({...repo, isFvorito: false}))));
        dispatch(setIsFetching(false));
      })
      .catch(error => {
        console.log(error);
        dispatch(setIsFetching(false));
      });
  };
}
