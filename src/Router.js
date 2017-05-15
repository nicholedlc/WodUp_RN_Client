import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';
import ExercisesIndex from './components/ExercisesIndex';
import NewExercise from './components/NewExercise';
import ShowExercise from './components/ShowExercise';
import NewLog from './components/NewLog';

const RouterComponent = () => {
  // renderBackButton={() => <Icon name='arrow-back' />}
  return (
    <Router sceneStyle={{ paddingTop: 66 }}
      backTitle="Back"
    >
      <Scene key='exercisesIndex'
        component={ExercisesIndex}
        title='WODUP!'
        rightTitle='Add'
        onRight={() => Actions.createNewExercise()}
      />
      <Scene key='createNewExercise'
        component={NewExercise}
        title='WODUP!'
      />
      <Scene key='showExercise'
        component={ShowExercise}
        title='Daily Log'
        rightTitle='Add'
        onRight={() => Actions.createNewLog()}
      />
      <Scene key='createNewLog'
        component={NewLog}
        title='New Log'
      />
    </Router>
  );
}

export default RouterComponent;
