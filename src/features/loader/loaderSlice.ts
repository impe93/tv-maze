import {createSlice} from '@reduxjs/toolkit';

export type LoaderState = {
  loader: boolean;
};

const initialState: LoaderState = {
  loader: false,
};

const LOADER_SLICE_NAME: string = 'loaderSlice';

export const showLoaderHandler = state => {
  state.loader = true;
};

export const hideLoaderHandler = state => {
  state.loader = false;
};

export const loaderSlice = createSlice({
  name: LOADER_SLICE_NAME,
  initialState,
  reducers: {
    showLoader: showLoaderHandler,
    hideLoader: hideLoaderHandler,
  },
});

export const {showLoader, hideLoader} = loaderSlice.actions;

export const loaderReducer = loaderSlice.reducer;
