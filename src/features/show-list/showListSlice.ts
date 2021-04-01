import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../../redux/store';
import {IHttpClient} from '../../services/http/HttpClient';
import {Show, ShowWithScore} from './show.models';

export type ShowListState = {
  showList: Show[];
};

const initialState: ShowListState = {
  showList: [],
};

const SHOW_LIST_SLICE_NAME: string = 'showListSlice';

const setShowListHandler = (
  state: ShowListState,
  action: PayloadAction<Show[]>,
) => {
  state.showList = action.payload;
};

export const showListSlice = createSlice({
  name: SHOW_LIST_SLICE_NAME,
  initialState,
  reducers: {
    setShowList: setShowListHandler,
  },
});

export const {setShowList} = showListSlice.actions;

export const searchShowsByName = (
  name: string,
  httpClient: IHttpClient,
): AppThunk => async dispatch => {
  try {
    const showWithScoreList: ShowWithScore[] = await httpClient.get<
      ShowWithScore[]
    >('/search/shows', {
      params: {
        q: name,
      },
    });
    const showList: Show[] = showWithScoreList.map(s => s.show);
    dispatch(setShowList(showList));
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getShows = (
  httpClient: IHttpClient,
): AppThunk => async dispatch => {
  try {
    const showList: Show[] = await httpClient.get<Show[]>('/shows');
    dispatch(setShowList(showList));
  } catch (e: any) {
    throw new Error(e);
  }
};

export const selectShowList = (state: RootState) => state.showList.showList;

export const showListReducer = showListSlice.reducer;
