import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {inputBorderColor, textColor} from '../utils/const';

type Props = {
  onTextChange?: (text: string) => void;
  placeholder?: string;
};

export const Input = ({onTextChange, placeholder}: Props) => {
  return (
    <TextInput
      onChangeText={onTextChange}
      placeholder={placeholder}
      style={style.input}
    />
  );
};

const style = StyleSheet.create({
  input: {
    borderWidth: 2.5,
    borderRadius: 12,
    borderColor: inputBorderColor,
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    paddingVertical: 4,
    paddingHorizontal: 16,
    color: textColor,
  },
});
