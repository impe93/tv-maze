import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {subtitleColor, textColor} from '../utils/const';

type Props = {
  children: string;
};

export const H1 = ({children}: Props) => (
  <Text style={style.h1}>{children}</Text>
);

export const H2 = ({children}: Props) => (
  <Text style={style.h2}>{children}</Text>
);

export const Subtitle = ({children}: Props) => (
  <Text style={style.subtitle}>{children}</Text>
);

export const Paragraph = ({children}: Props) => (
  <Text style={style.paragraph}>{children}</Text>
);

const style = StyleSheet.create({
  h1: {
    fontFamily: 'DelaGothicOne-Regular',
    fontSize: 32,
    color: textColor,
  },
  h2: {
    fontFamily: 'DelaGothicOne-Regular',
    fontSize: 24,
    color: textColor,
  },
  subtitle: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 24,
    color: subtitleColor,
  },
  paragraph: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: textColor,
  },
});
