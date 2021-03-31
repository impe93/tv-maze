import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ShowList} from '../features/show-list/ShowList';

type Route = {
  name: string;
  component: React.ComponentType;
};

export const Stack = createStackNavigator();

export const SHOW_LIST_PAGE = 'ShowListPage';
export const SHOW_DETAILS_PAGE = 'ShowDetailsPage';

export const routes: Route[] = [{name: SHOW_LIST_PAGE, component: ShowList}];
