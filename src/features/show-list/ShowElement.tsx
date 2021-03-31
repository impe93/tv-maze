import {StackNavigationProp} from '@react-navigation/stack';
import React, {memo} from 'react';
import {PageLayout} from '../../components/PageLayout';
import {RootStackParamList} from '../../utils/routes';

type ShowElementNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ShowListPage'
>;

type Props = {
  navigator: ShowElementNavigationProp;
};

export const ShowElement = memo(({}: Props) => {
  return <PageLayout />;
});
