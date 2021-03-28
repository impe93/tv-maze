import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {container, ContainerContext} from './services/ioc/ContainerContext';
import {store} from './redux/store';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ContainerContext.Provider value={container}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Screen />
        </NavigationContainer>
      </Provider>
    </ContainerContext.Provider>
  );
};

export default App;
