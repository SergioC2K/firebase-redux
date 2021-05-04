import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import ConfigureStore from './src/redux/index';
import Index from './src/index';
import Input_alert from './src/components/alert/input_alert';
import {View} from 'react-native';

const store = ConfigureStore();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
