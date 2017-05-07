import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ExercisesIndex from './components/ExercisesIndex';

const store = configureStore(); // can also pass an initial state here

const App = () => {
  return (
    <Provider store={store}>
      <ExercisesIndex />
    </Provider>
  );
};

export default App;
