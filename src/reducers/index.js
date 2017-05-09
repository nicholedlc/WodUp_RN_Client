import { combineReducers } from 'redux';
import { exercises, exercisesErrored, exercisesLoading } from './ExercisesIndex';
import { exercise } from './ExerciseItem';

export default combineReducers({
  exercises,
  exercisesErrored,
  exercisesLoading,
  exercise
});
