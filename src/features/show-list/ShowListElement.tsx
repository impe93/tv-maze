import React, {memo} from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Arrow} from '../../components/Arrow';
import {SmallPoster} from '../../components/Poster';
import {H2, Subtitle} from '../../components/Typography';
import {viewportPadding} from '../../utils/const';
import {Show} from './show.models';

type Props = {
  show: Show;
  onPress: () => void;
};

export const ShowListElement = memo(({show, onPress}: Props) => {
  let poster: ImageSourcePropType;

  if (show.image) {
    poster = show.image?.medium
      ? {uri: show.image.medium}
      : {uri: show.image.original};
  } else {
    poster = require('../../assets/images/no-image.png');
  }

  const testID = `ShowListElement__${show.id}`;

  return (
    <View style={style.card}>
      <TouchableOpacity onPress={onPress}>
        <View style={style.container}>
          <SmallPoster source={poster} />
          <View style={style.infoContainer}>
            <H2>{show.name}</H2>
            {show.genres && show.genres.length > 0 ? (
              <Subtitle testID={testID}>{show.genres[0]}</Subtitle>
            ) : null}
          </View>
          <Arrow direction="right" />
        </View>
      </TouchableOpacity>
    </View>
  );
});

const style = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: viewportPadding / 2,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
  },
});
