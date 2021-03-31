import React, {ReactNode} from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {viewportPadding} from '../utils/const';

type Props = {
  children?: ReactNode;
};

export const PageLayout = ({children}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView>
        <View style={styleSheet.container}>{children}</View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    paddingTop: viewportPadding,
    paddingHorizontal: viewportPadding,
  },
});
