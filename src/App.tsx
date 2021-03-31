import 'react-native-gesture-handler';

import React from 'react';
import {container, ContainerContext} from './services/ioc/ContainerContext';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {routes, SHOW_LIST_PAGE, Stack} from './utils/routes';

const App = () => {
  return (
    <ContainerContext.Provider value={container}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={SHOW_LIST_PAGE} headerMode="none">
            {routes.map(({name, component}) => (
              <Stack.Screen key={name} name={name} component={component} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ContainerContext.Provider>
  );
};

export default App;
