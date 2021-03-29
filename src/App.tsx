import 'react-native-gesture-handler';

import React from 'react';
import {container, ContainerContext} from './services/ioc/ContainerContext';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {Heading} from './components/Typography';

const App = () => {
  return (
    <ContainerContext.Provider value={container}>
      <Provider store={store}>
        <SafeAreaView>
          <Heading>TV Shows</Heading>
        </SafeAreaView>
      </Provider>
    </ContainerContext.Provider>
  );
};

export default App;
