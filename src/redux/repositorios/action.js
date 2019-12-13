import React from 'react';
import {reposQuery} from '../../screens/querys/repoQuery';
import {useQuery} from '@apollo/react-hooks';
export const SET_REPOS = 'SET_REPOS';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';

export const setRepos = repos => ({
  type: SET_REPOS,
  payload: repos,
});

export const setIsFetching = isFetching => ({
  type: SET_IS_FETCHING,
  payload: isFetching,
});

export function getRepos() {
  return function fetching(dispatch, getState) {
    dispatch(setIsFetching(true));
  };
}
