import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {H1} from '../../components/Typography';
import {viewportPadding} from '../../utils/const';

type Props = {};

export const ShowList = () => {
  return (
    <SafeAreaView>
      <View style={style.titleContainer}>
        <Image source={require('../../assets/images/movie.png')} />
        <H1 style={style.h1}>TV Shows</H1>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: viewportPadding,
    marginTop: viewportPadding,
  },
  h1: {
    marginLeft: 24,
  },
});
