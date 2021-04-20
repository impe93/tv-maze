import { all } from 'redux-saga/effects';
import { showListSaga } from '../features/show-list/store/showList.saga';

export default function* rootSaga() {
  yield all([
    showListSaga(),
  ]);
}