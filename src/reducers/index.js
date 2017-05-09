import { combineReducers } from 'redux';
import { exercises, exercisesErrored, exercisesLoading } from './ExercisesIndex';
import { exerciseId } from './ExerciseItem';

export default combineReducers({
  exercises,
  exercisesErrored,
  exercisesLoading,
  exerciseId
});
