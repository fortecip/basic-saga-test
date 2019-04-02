import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
export function* testRequest() {
  let title;
  yield axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
    title = response.data[0].title;
    // console.log('title',title);
  });
  yield put({ type: 'REQUEST_ASYNC', title });
}
export function* watchTestRequest() {
  yield takeEvery('REQUEST', testRequest);
}