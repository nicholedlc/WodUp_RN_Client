import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { Container } from 'native-base';

import Router from './Router';
import configureStore from './store/configureStore';
import ExercisesIndex from './components/ExercisesIndex';

const store = configureStore(); // can also pass an initial state here

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <StatusBar
          barStyle='light-content'
        />
        <Router />
      </Container>
    </Provider>
  );
};

export default App;
