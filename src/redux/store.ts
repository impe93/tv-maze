import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {loaderReducer} from '../features/loader/loaderSlice';
import {showListReducer} from '../features/show-list/showListSlice';
import {container} from '../services/ioc/ContainerContext';

export const store = configureStore({
  reducer: {
    showList: showListReducer,
    loader: loaderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const StoreType = Symbol.for('Store');

container.bind(StoreType).toConstantValue(store);
