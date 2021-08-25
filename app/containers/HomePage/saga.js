import { call, put } from 'redux-saga/effects';
import request from 'utils/requests';

import { reposLoaded } from 'containers/App/actions';

export default function* getGame() {
  const requestURL = `http://localhost:4000/game`;

  const result = yield call(request, requestURL);
  yield put(reposLoaded(result));
}
