import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Arrow} from './Arrow';

type Props = {
  onPress: () => void;
};

export const BackButton = ({onPress}: Props) => (
  <View testID="TVMaze__BackButton" style={styleSheet.container}>
    <TouchableOpacity onPress={onPress}>
      <Arrow direction="left" />
    </TouchableOpacity>
  </View>
);

const styleSheet = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
