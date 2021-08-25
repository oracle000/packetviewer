import { LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR, LOAD_GAME } from './constants';

export function loadGames() {
  return {
    type: LOAD_GAME,
  };
}

export function reposLoaded(gamesList) {
  return {
    type: LOAD_REPOS_SUCCESS,
    gamesList,
  };
}

export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
