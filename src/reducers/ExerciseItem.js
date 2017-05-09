import { SELECT_EXERCISE } from '../actions/types';
import { Actions } from 'react-native-router-flux';

export const exercise = (state = null, action) => {
  if(action.type === 'SELECT_EXERCISE') console.log(action.exercise);
  switch(action.type) {
    case SELECT_EXERCISE:
      Actions.showExercise();
      return action.exercise;
    default:
      return state;
  }
};
