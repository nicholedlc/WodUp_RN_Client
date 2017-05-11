import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ExercisesIndex from './components/ExercisesIndex';
import ShowExercise from './components/ShowExercise';
import NewLog from './components/NewLog';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 66 }}>
      <Scene key='exercisesIndex' component={ExercisesIndex} title='WODUP!' />
      <Scene key='showExercise' component={ShowExercise} title='Daily Log' rightTitle='+' onRight={() => Actions.createNewLog(true)} />
      <Scene key='createNewLog' component={NewLog} title='New Log' />
    </Router>
  );
}

export default RouterComponent;
