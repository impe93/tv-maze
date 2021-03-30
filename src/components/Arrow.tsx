import React from 'react';
import {Image} from 'react-native';

type Props = {
  direction: 'left' | 'right';
};

export const Arrow = ({direction}: Props) => {
  const icon =
    direction === 'left'
      ? require('../assets/images/left-arrow.png')
      : require('../assets/images/right-arrow.png');

  return <Image source={icon} />;
};
