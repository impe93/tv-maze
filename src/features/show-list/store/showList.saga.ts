import { call, put, takeLatest } from "redux-saga/effects";
import { Show, ShowWithScore } from "../show.models";
import { GetShowsType, SearchShowsByNameType } from "./showList.actions";
import { GET_SHOWS_ACTION, SEARCH_SHOWS_BY_NAME_ACTION } from "./showList.constants";
import { setShowList } from "./showListSlice";

export function* searchShowsByName({ apiConfig }: SearchShowsByNameType) {
  const { httpClient, config } = apiConfig;
  console.log(apiConfig)
  try {
    const showWithScoreList: ShowWithScore[] = yield call(
      () => httpClient.get<ShowWithScore[]>('/search/shows', config)
    );
    const showList: Show[] = showWithScoreList.map(s => s.show);
    yield put(setShowList(showList))
  } catch (e: any) {
    throw new Error(e);
  }
};

export function* getShows({ apiConfig }: GetShowsType) {
  const { httpClient } = apiConfig;
  try {
    const showList: Show[] = yield call(() => httpClient.get<Show[]>('/shows'))
    yield put(setShowList(showList))
  } catch (e: any) {
    throw new Error(e);
  }
};

export function* showListSaga() {
  yield takeLatest(GET_SHOWS_ACTION, getShows);
  yield takeLatest(SEARCH_SHOWS_BY_NAME_ACTION, searchShowsByName);
}
