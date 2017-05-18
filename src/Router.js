import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';
import ExercisesIndex from './components/ExercisesIndex';
import NewExercise from './components/NewExercise';
import ShowExercise from './components/ShowExercise';
import NewLog from './components/NewLog';

const RouterComponent = () => {
  // renderBackButton={() => <Icon name='arrow-back' />}
  // TODO backgroundColor #222b2e
  return (
    <Router sceneStyle={{ paddingTop: 66, backgroundColor: '#EAEAEA' }}
      title='WODUP!'
      backTitle='Back'
      navigationBarStyle={{backgroundColor: '#002C31', height: 66 }}
      titleStyle={{color: 'white', fontWeight: 'bold', fontSize: 20 }}
      backButtonTextStyle={{ color: '#67bec9' }}
      rightButtonTextStyle={{ color: '#67bec9' }}
    >
      <Scene key='exercisesIndex'
        component={ExercisesIndex}
        rightTitle='Add'
        onRight={() => Actions.createNewExercise()}
      />
      <Scene key='createNewExercise'
        component={NewExercise}
        leftTitle='Back'
        leftButtonTextStyle={{ color: '#67bec9' }}
        onLeft={() => Actions.exercisesIndex()}
      />
      <Scene key='showExercise'
        component={ShowExercise}
        rightTitle='Add'
        onRight={() => Actions.createNewLog()}
      />
      <Scene key='createNewLog'
        component={NewLog}
      />
    </Router>
  );
}

export default RouterComponent;
