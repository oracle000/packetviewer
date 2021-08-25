import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectGlobal = state => state.global || initialState;
const selectRouter = state => state.router;

const makeSelectUsername = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData.listOfGames,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export { makeSelectLocation, makeSelectUsername };
