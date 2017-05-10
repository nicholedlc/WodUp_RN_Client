import { combineReducers } from 'redux';
import exercisesIndex from './ExercisesIndexReducer';
import exercise from './ExerciseItemReducer';
import showExercise from './ShowExerciseReducer';

export default combineReducers({
  exercisesIndex,
  exercise,
  showExercise
});
