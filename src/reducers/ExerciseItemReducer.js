import { SELECT_EXERCISE } from '../actions/types';
import { Actions } from 'react-native-router-flux';

const INITIAL_STATE = {
  exercise: {}
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SELECT_EXERCISE:
      Actions.showExercise();
      return { ...state, ...action.exercise }
    default:
      return state;
  }
};
