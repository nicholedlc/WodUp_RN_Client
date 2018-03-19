import React from "react";
import { StatusBar, View } from "react-native";
import { Provider } from "react-redux";
import { Container } from "native-base";

import Router from "./Router";
import ExercisesIndex from "./components/ExercisesIndex";
import { BottomNav } from "./components/common/BottomNav";
import { AsyncStorage } from "react-native";
import { store } from "./store"

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <StatusBar barStyle="light-content" />
        <Router />
        <BottomNav />
      </Container>
    </Provider>
  );
};

export default App;
