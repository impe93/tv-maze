import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Arrow} from './Arrow';

type Props = {
  onPress: () => void;
};

export const BackButton = ({onPress}: Props) => (
  <TouchableOpacity onPress={onPress}>
    <Arrow direction="left" />
  </TouchableOpacity>
);
