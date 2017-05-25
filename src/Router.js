import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';
import { NAV_HEIGHT, BACKGROUND_PRIMARY, COLOR_PRIMARY, COLOR_SECONDARY } from './styles/common';
import * as S from './styles/common'
import ExercisesIndex from './components/ExercisesIndex';
import NewExercise from './components/NewExercise';
import ShowExercise from './components/ShowExercise';
import NewLog from './components/NewLog';
import LogIn from './components/LogIn';
import ShowProfile from './components/ShowProfile';

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
      <Scene key='auth'>
        <Scene
          key='logIn'
          component={LogIn}
          // rightTitle='Sign Up'
          // onRight={() => Actions.signUps()}
          leftTitle='Exercises'
          leftButtonTextStyle={buttonTextStyle}
          onLeft={() => Actions.main()}
        />
        <Scene
          key='showProfile'
          component={ShowProfile}
        />
      </Scene>
      <Scene key='main'>
        <Scene
          key='exercisesIndex'
          component={ExercisesIndex}
          rightTitle='Add'
          onRight={() => Actions.createNewExercise()}
          leftTitle='Log In'
          leftButtonTextStyle={buttonTextStyle}
          onLeft={() => Actions.auth()}
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
      </Scene>
    </Router>
  );
}

const styles = {
  sceneStyle: {
    paddingTop: 66,
    backgroundColor: `${BACKGROUND_PRIMARY}`
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
