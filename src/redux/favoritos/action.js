export const SET_REPO_FAV = 'ADD_REPO_FAV';

export const setFavotiros = repo => ({
  type: SET_REPO_FAV,
  payload: repo,
});

export const addRepoToFavotiros = id => {
  return function fetching(dispatch, getstate) {
    const {favoritosReducer: reposFavoritos} = getstate();
    console.log('r', reposFavoritos);
    dispatch(setFavotiros(id));
  };
};
