import {StackNavigationProp} from '@react-navigation/stack';
import React, {memo, useCallback} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {BackButton} from '../../components/BackButton';
import {PageLayout} from '../../components/PageLayout';
import {Poster} from '../../components/Poster';
import {H1, Paragraph} from '../../components/Typography';
import {viewportPadding} from '../../utils/const';
import {RootStackParamList} from '../../utils/routes';
import {Show} from './show.models';

type ShowElementNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ShowListPage'
>;

type Props = {
  navigation: ShowElementNavigationProp;
  route: any;
};

export const ShowElement = memo(({navigation, route}: Props) => {
  const show: Show = route.params.choosedShow;
  const onBack = useCallback(() => navigation.goBack(), [navigation]);

  const cleanSummary = show.summary.replace(/<\/?[^>]+(>|$)/g, '');

  return (
    <PageLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton onPress={onBack} />
        <H1 style={styleSheet.topMargin}>{show.name}</H1>
        {show.image ? (
          <View style={styleSheet.topMargin}>
            <Poster source={{uri: show.image.original}} />
          </View>
        ) : null}
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
    marginTop: viewportPadding,
    marginBottom: viewportPadding,
  },
});
