import {StackNavigationProp} from '@react-navigation/stack';
import React, {memo, useCallback} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {BackButton} from '../../components/BackButton';
import {PageLayout} from '../../components/PageLayout';
import {Poster} from '../../components/Poster';
import {H1, Paragraph, Subtitle} from '../../components/Typography';
import {viewportPadding} from '../../utils/const';
import {RootStackParamList} from '../../utils/routes';
import {Show} from './show.models';

type ShowElementNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ShowListPage'
>;

type Props = {
  navigation: ShowElementNavigationProp;
  route: any; // Don't like it
};

export const ShowElement = memo(({navigation, route}: Props) => {
  const show: Show = route.params.choosedShow;
  const onBack = useCallback(() => navigation.goBack(), [navigation]);

  const cleanSummary = show.summary.replace(/<\/?[^>]+(>|$)/g, '');

  const genres: string = show.genres.reduce((pv, cv, index) => {
    const finalString = index === 0 ? `${cv}` : `${pv}, ${cv}`;
    return finalString;
  }, '');

  console.log(show.genres);
  console.log(genres);

  const date = new Date(show.premiered);
  const premierYear = date.getFullYear();

  return (
    <PageLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton onPress={onBack} />
        <H1 style={styleSheet.topMargin}>{`${show.name} (${premierYear})`}</H1>
        {!genres || genres === '' ? null : <Subtitle>{genres}</Subtitle>}
        {show.image ? (
          <View style={styleSheet.topMargin}>
            <Poster source={{uri: show.image.original}} />
          </View>
        ) : null}
        <Subtitle style={styleSheet.topMargin}>Summary</Subtitle>
        <Paragraph style={styleSheet.paragraph}>{cleanSummary}</Paragraph>
      </ScrollView>
    </PageLayout>
  );
});

const styleSheet = StyleSheet.create({
  topMargin: {
    marginTop: viewportPadding,
  },
  paragraph: {
    marginTop: viewportPadding / 2,
    marginBottom: viewportPadding,
  },
});
