import {StackNavigationProp} from '@react-navigation/stack';
import React, {memo, useCallback, useEffect, useMemo} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import _ from 'underscore';
import {Input} from '../../components/Input';
import {PageLayout} from '../../components/PageLayout';
import {H1} from '../../components/Typography';
import {store} from '../../redux/store';
import {IHttpClient, IHttpClientType} from '../../services/http/HttpClient';
import {useDependency} from '../../services/ioc/useDependency';
import {hrColor, viewportPadding} from '../../utils/const';
import {RootStackParamList, SHOW_DETAILS_PAGE} from '../../utils/routes';
import {Show} from './show.models';
import {ShowListElement} from './ShowListElement';
import {getShows, searchShowsByName, selectShowList} from './showListSlice';

type ShowListNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ShowListPage'
>;

type Props = {
  navigation: ShowListNavigationProp;
  getShowsAction: (httpClient: IHttpClient) => void;
  searchShowsByNameAction: (text: string, httpClient: IHttpClient) => void;
};

type Item = {
  item: Show;
};

export const ShowList = memo(
  ({getShowsAction, navigation, searchShowsByNameAction}: Props) => {
    const showList: Show[] = useSelector(selectShowList);
    const httpClient = useDependency<IHttpClient>(IHttpClientType);

    useEffect(() => {
      getShowsAction(httpClient);
    }, [getShowsAction, httpClient]);

    const renderItem = ({item}: Item) => {
      const onPress = () =>
        navigation.navigate(SHOW_DETAILS_PAGE, {choosedShow: item});
      return <ShowListElement show={item} onPress={onPress} />;
    };

    const onTextChange = useCallback(
      (text: string) => {
        if (text.length >= 3) {
          searchShowsByNameAction(text, httpClient);
        } else if (text.length === 0) {
          getShowsAction(httpClient);
        }
      },
      [httpClient, searchShowsByNameAction, getShowsAction],
    );

    const debouncedOnTextChange = useMemo(() => _.debounce(onTextChange, 500), [
      onTextChange,
    ]);

    return (
      <PageLayout>
        <View style={[style.titleContainer]}>
          <Image source={require('../../assets/images/movie.png')} />
          <H1 style={style.h1}>TV Shows</H1>
        </View>
        <Input
          onTextChange={debouncedOnTextChange}
          placeholder="Search show..."
          style={style.input}
        />
        <View style={style.hr} />
        <FlatList
          keyExtractor={item => `${item.id}`}
          data={showList}
          renderItem={renderItem}
        />
      </PageLayout>
    );
  },
);

const style = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  h1: {
    marginLeft: 24,
  },
  input: {
    marginTop: viewportPadding,
  },
  hr: {
    borderBottomColor: hrColor,
    borderBottomWidth: 1,
    marginTop: viewportPadding,
  },
  scrollView: {
    paddingTop: viewportPadding / 2,
  },
});

const showDispatcher = (httpClient: IHttpClient) =>
  store.dispatch(getShows(httpClient));

const searchByNameDispatcher = (name: string, httpClient: IHttpClient) =>
  store.dispatch(searchShowsByName(name, httpClient));

type ComposedProps = {
  navigation: ShowListNavigationProp;
};

export const ComposedShowList = ({navigation}: ComposedProps) => (
  <ShowList
    navigation={navigation}
    getShowsAction={showDispatcher}
    searchShowsByNameAction={searchByNameDispatcher}
  />
);
