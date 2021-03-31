import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Arrow} from '../../components/Arrow';
import {SmallPoster} from '../../components/Poster';
import {H2, Subtitle} from '../../components/Typography';
import {viewportPadding} from '../../utils/const';
import {Show} from './show.models';

type Props = {
  show: Show;
  onPress: () => void;
};

export const ShowListElement = ({show, onPress}: Props) => {
  return (
    <View style={style.card}>
      <TouchableOpacity onPress={onPress}>
        <View style={style.container}>
          <SmallPoster uri={show.image.medium} />
          <View style={style.infoContainer}>
            <H2>{show.name}</H2>
            <Subtitle>{show.genres[0]}</Subtitle>
          </View>
          <Arrow direction="right" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: viewportPadding / 2,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
  },
});
