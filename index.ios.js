import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Header from './src/components/Header';
import ExercisesIndex from './src/components/ExercisesIndex';


const App = () => {
  return (
    <View>
      <Header headerText='WODUP!'/>
      <ExercisesIndex />
    </View>
  );
}

AppRegistry.registerComponent('WodUp_RN_Client', () => App);
