import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ExercisesIndex from './components/ExercisesIndex';
import ShowExercise from './components/ShowExercise';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 66 }}>
      <Scene key='exercisesIndex' component={ExercisesIndex} title='WODUP!' />
      <Scene key='showExercise' component={ShowExercise} title='Daily Log' />
    </Router>
  );
}

export default RouterComponent;
