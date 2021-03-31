import React from 'react';
import {StyleProp, StyleSheet, TextInput, TextStyle} from 'react-native';
import {inputBorderColor, textColor} from '../utils/const';

type Props = {
  onTextChange?: (text: string) => void;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
};

export const Input = ({onTextChange, placeholder, style}: Props) => {
  return (
    <TextInput
      onChangeText={onTextChange}
      placeholder={placeholder}
      style={[styleSheet.input, style]}
    />
  );
};

const styleSheet = StyleSheet.create({
  input: {
    borderWidth: 2.5,
    borderRadius: 12,
    borderColor: inputBorderColor,
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: textColor,
  },
});
