import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import ExercisesIndex from './components/ExercisesIndex';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <ExercisesIndex />
    </Provider>
  );
};

export default App;
