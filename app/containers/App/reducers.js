import produce from 'immer';
import { LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR } from './constants';

export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    listOfGames: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS_SUCCESS:
        draft.userData.listOfGames = action.gamesList;
        break;
      case LOAD_REPOS_ERROR:
        draft.error = true;
        break;
      default:
        break;
    }
  });

export default appReducer;
