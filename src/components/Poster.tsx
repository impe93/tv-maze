import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {viewportPadding} from '../utils/const';

type Props = {
  uri: string;
};

const smallPosterWidth =
  (Dimensions.get('window').width - viewportPadding * 2) / 2;
const smallPosterHeight = smallPosterWidth * 1.4;

const posterWidth = Dimensions.get('window').width - viewportPadding * 2;
const posterHeight = posterWidth * 1.4;

export const Poster = ({uri}: Props) => (
  <Image source={{uri}} style={style.poster} />
);

export const SmallPoster = ({uri}: Props) => (
  <Image source={{uri}} style={style.smallPoster} />
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
