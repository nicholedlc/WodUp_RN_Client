import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';
import { NAV_HEIGHT, COLOR_PRIMARY, COLOR_SECONDARY } from './styles/common';
import * as S from './styles/common'
import ExercisesIndex from './components/ExercisesIndex';
import NewExercise from './components/NewExercise';
import ShowExercise from './components/ShowExercise';
import NewLog from './components/NewLog';

const RouterComponent = () => {
  const { sceneStyle, navigationBarStyle, titleStyle, buttonTextStyle } = styles;
  return (
    <Router
      sceneStyle={sceneStyle}
      title='WODUP!'
      backTitle='Back'
      navigationBarStyle={navigationBarStyle}
      titleStyle={titleStyle}
      backButtonTextStyle={buttonTextStyle}
      rightButtonTextStyle={buttonTextStyle}
    >
      <Scene
        key='exercisesIndex'
        component={ExercisesIndex}
        rightTitle='Add'
        onRight={() => Actions.createNewExercise()}
      />
      <Scene
        key='createNewExercise'
        component={NewExercise}
        onLeft={() => Actions.exercisesIndex()}
      />
      <Scene
        key='showExercise'
        component={ShowExercise}
        rightTitle='Add'
        onRight={() => Actions.createNewLog()}
      />
      <Scene
        key='createNewLog'
        component={NewLog}
      />
    </Router>
  );
}

const styles = {
  sceneStyle: {
    paddingTop: 66,
    backgroundColor: `${COLOR_PRIMARY}`
  },
  navigationBarStyle: {
    backgroundColor: `${COLOR_SECONDARY}`,
    height: 66
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  buttonTextStyle: {
    color: `${COLOR_PRIMARY}`
  }
};

export default RouterComponent;
