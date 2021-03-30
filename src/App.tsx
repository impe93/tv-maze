import 'react-native-gesture-handler';

import React from 'react';
import {container, ContainerContext} from './services/ioc/ContainerContext';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {SafeAreaView, ScrollView} from 'react-native';
import {H1, H2, Paragraph, Subtitle} from './components/Typography';
import {Arrow} from './components/Arrow';
import {Poster} from './components/Poster';
import {BackButton} from './components/BackButton';
import {Input} from './components/Input';

const App = () => {
  return (
    <ContainerContext.Provider value={container}>
      <Provider store={store}>
        <SafeAreaView>
          <ScrollView>
            <H1>TV Shows</H1>
            <H2>TV Shows</H2>
            <Subtitle>TV Shows</Subtitle>
            <Paragraph>TV Shows</Paragraph>
            <Arrow direction="right" />
            <BackButton onPress={() => console.log('work')} />
            <Input />
            <Poster uri="https://static.tvmaze.com/uploads/images/original_untouched/0/73.jpg" />
          </ScrollView>
        </SafeAreaView>
      </Provider>
    </ContainerContext.Provider>
  );
};

export default App;
