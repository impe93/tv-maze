import React, {memo, useEffect} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Input} from '../../components/Input';
import {PageLayout} from '../../components/PageLayout';
import {H1} from '../../components/Typography';
import {store} from '../../redux/store';
import {IHttpClient, IHttpClientType} from '../../services/http/HttpClient';
import {useDependency} from '../../services/ioc/useDependency';
import {hrColor, viewportPadding} from '../../utils/const';
import {Show} from './show.models';
import {ShowListElement} from './ShowListElement';
import {getShows, selectShowList} from './showListSlice';

type Props = {
  getShowsAction: (httpClient: IHttpClient) => void;
};

export const ShowList = memo(({getShowsAction}: Props) => {
  const showList: Show[] = useSelector(selectShowList);
  const httpClient = useDependency<IHttpClient>(IHttpClientType);

  useEffect(() => {
    getShowsAction(httpClient);
  });

  const renderItem = ({item}) => {
    return (
      <ShowListElement
        show={item}
        onPress={() => console.log('Movie ' + item.id + ' pressed')}
      />
    );
  };

  return (
    <PageLayout>
      <View style={[style.titleContainer]}>
        <Image source={require('../../assets/images/movie.png')} />
        <H1 style={style.h1}>TV Shows</H1>
      </View>
      <Input placeholder="Search show..." style={style.input} />
      <View style={style.hr} />
      <FlatList
        keyExtractor={item => item.id}
        data={showList}
        renderItem={renderItem}
      />
    </PageLayout>
  );
});

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

export const ComposedShowList = () => (
  <ShowList getShowsAction={showDispatcher} />
);
