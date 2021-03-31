import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {H1} from '../../components/Typography';

type Props = {};

export const ShowList = () => {
  return (
    <SafeAreaView>
      <View style={style.titleContainer}>
        <H1>TV Shows</H1>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  titleContainer: {},
});
