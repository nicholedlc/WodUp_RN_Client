import { combineReducers } from 'redux';
import exercisesIndex from './ExercisesIndex';
import exercise from './ExerciseItem';

export default combineReducers({
  exercisesIndex,
  exercise
});
