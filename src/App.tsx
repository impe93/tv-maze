import 'react-native-gesture-handler';

import React from 'react';
import {container, ContainerContext} from './services/ioc/ContainerContext';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {H1, H2, Paragraph, Subtitle} from './components/Typography';

const App = () => {
  return (
    <ContainerContext.Provider value={container}>
      <Provider store={store}>
        <SafeAreaView>
          <H1>TV Shows</H1>
          <H2>TV Shows</H2>
          <Subtitle>TV Shows</Subtitle>
          <Paragraph>TV Shows</Paragraph>
        </SafeAreaView>
      </Provider>
    </ContainerContext.Provider>
  );
};

export default App;
