import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {subtitleColor, textColor} from '../utils/const';

type Props = {
  children: string;
  testID?: string;
  style?: StyleProp<TextStyle>;
};

export const H1 = ({children, style}: Props) => (
  <Text style={[style, styleSheet.h1]}>{children}</Text>
);

export const H2 = ({children, style}: Props) => (
  <Text style={[style, styleSheet.h2]}>{children}</Text>
);

export const Subtitle = ({children, style, testID}: Props) => (
  <Text testID={testID} style={[style, styleSheet.subtitle]}>
    {children}
  </Text>
);

export const Paragraph = ({children, style}: Props) => (
  <Text style={[style, styleSheet.paragraph]}>{children}</Text>
);

const styleSheet = StyleSheet.create({
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
    fontSize: 18,
    color: subtitleColor,
  },
  paragraph: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: textColor,
  },
});
