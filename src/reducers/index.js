import { combineReducers } from 'redux';
import exercisesIndex from './ExercisesIndexReducer';
import exercise from './ExerciseItemReducer';
import showExercise from './ShowExerciseReducer';
import logId from './ShowLogReducer';
import newExercise from './NewExerciseReducer';
import bool from './NewLogReducer';

export default combineReducers({
  exercisesIndex,
  exercise,
  showExercise,
  logId,
  newExercise,
  bool
});
