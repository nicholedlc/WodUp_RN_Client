import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Header from './src/components/Header'

const App = () => {
  return (
    <View>
      <Header headerText='WODUP!'/>
    </View>
  );
}

AppRegistry.registerComponent('WodUp_RN_Client', () => App);
