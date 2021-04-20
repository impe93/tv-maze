import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { ShowListActionList } from '../features/show-list/store/showList.constants';
import { showListReducer } from '../features/show-list/store/showListSlice';
import { container } from '../services/ioc/ContainerContext';
import rootSaga from './rootSaga';

let sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    serializableCheck: {
      ignoredActions: [
        ...ShowListActionList,
      ],
    },
  }),
  sagaMiddleware
];

export const store = configureStore({
  reducer: {
    showList: showListReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export const StoreType = Symbol.for('Store');

container.bind(StoreType).toConstantValue(store);
