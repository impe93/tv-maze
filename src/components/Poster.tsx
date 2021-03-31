import React from 'react';
import {Dimensions, Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {viewportPadding} from '../utils/const';

type Props = {
  source: ImageSourcePropType;
};

const smallPosterWidth =
  (Dimensions.get('window').width - viewportPadding * 2) / 2.5;
const smallPosterHeight = smallPosterWidth * 1.4;

const posterWidth = Dimensions.get('window').width - viewportPadding * 2;
const posterHeight = posterWidth * 1.4;

export const Poster = ({source}: Props) => (
  <Image source={source} style={style.poster} />
);

export const SmallPoster = ({source}: Props) => (
  <Image source={source} style={style.smallPoster} />
);

const style = StyleSheet.create({
  poster: {
    width: posterWidth,
    height: posterHeight,
    borderRadius: 24,
    resizeMode: 'cover',
  },
  smallPoster: {
    width: smallPosterWidth,
    height: smallPosterHeight,
    borderRadius: 12,
    resizeMode: 'cover',
  },
});
