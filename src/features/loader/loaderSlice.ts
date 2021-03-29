import {createSlice} from '@reduxjs/toolkit';

export type LoaderState = {
  loader: boolean;
};

const initialState: LoaderState = {
  loader: false,
};

const LOADER_SLICE_NAME: string = 'loaderSlice';

export const loaderSlice = createSlice({
  name: LOADER_SLICE_NAME,
  initialState,
  reducers: {
    showLoader: state => {
      state.loader = true;
    },
    hideLoader: state => {
      state.loader = false;
    },
  },
});

export const loaderReducer = loaderSlice.reducer;
