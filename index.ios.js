import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import ExercisesIndex from './src/components/ExercisesIndex';

const App = () => {
  return (
    <View>
      <ExercisesIndex />
    </View>
  );
}

AppRegistry.registerComponent('WodUp_RN_Client', () => App);
