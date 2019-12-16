import {SET_REPO_FAV} from './action';
const initialState = {
  reposFavoritos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_REPO_FAV:
      return {...state, reposFavoritos: [...state.reposFavoritos, action.payload]};
    default:
      return state;
  }
};
