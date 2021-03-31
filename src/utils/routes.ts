import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Show} from '../features/show-list/show.models';
import { ShowElement } from '../features/show-list/ShowElement';
import {ComposedShowList} from '../features/show-list/ShowList';

type Route = {
  name: string;
  component: React.ComponentType<any>;
};

export const Stack = createStackNavigator();

export const SHOW_LIST_PAGE = 'ShowListPage';
export const SHOW_DETAILS_PAGE = 'ShowDetailsPage';

export type RootStackParamList = {
  [SHOW_LIST_PAGE]: undefined;
  [SHOW_DETAILS_PAGE]: {choosedShow: Show};
};

export const routes: Route[] = [
  {name: SHOW_LIST_PAGE, component: ComposedShowList},
  {name: SHOW_DETAILS_PAGE, component: ShowElement},
];
