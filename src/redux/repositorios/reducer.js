import {SET_REPOS, SET_IS_FETCHING, SET_FAVORITO} from './action';

const initialState = {
  repos: {},
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_REPOS:
      return {...state, repos: action.payload};
    case SET_IS_FETCHING:
      return {...state, isFetching: action.payload};
    case SET_FAVORITO:
      return {
        ...state,
        repos: {
          ...state.repos,
          [action.payload]: {
            ...state.repos[action.payload],
            isFavorito: !state.repos[action.payload].isFavorito,
          },
        },
      };
    default:
      return state;
  }
};
