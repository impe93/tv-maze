import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {textColor} from '../utils/const';

type Props = {
  children: string;
};

export const Heading = ({children}: Props) => (
  <Text style={style.h1}>{children}</Text>
);

const style = StyleSheet.create({
  h1: {
    fontFamily: 'DelaGothicOne-Regular',
    fontSize: 32,
    color: textColor,
  },
});
