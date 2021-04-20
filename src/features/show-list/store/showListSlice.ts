import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../redux/store';
import { Show } from '../show.models';

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

export const { setShowList } = showListSlice.actions;

export const selectShowList = (state: RootState) => state.showList.showList;

export const showListReducer = showListSlice.reducer;
