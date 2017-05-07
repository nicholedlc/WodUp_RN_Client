import { combineReducers } from 'redux';
import { exercises, exercisesErrored, exercisesLoading } from './ExercisesIndex';

export default combineReducers({
  exercises,
  exercisesErrored,
  exercisesLoading
});
