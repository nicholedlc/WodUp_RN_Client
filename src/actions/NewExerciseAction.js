import {
  INPUT_EXERCISE,
  NEW_EXERCISE_SUCCEEDED,
  NEW_EXERCISE_LOADING,
  NEW_EXERCISE_FAILED
} from './types';
import { Actions } from 'react-native-router-flux';
import { Exercise } from '../fetches';

const newExerciseSucceeded = exercise => {
  return {
    type: NEW_EXERCISE_SUCCEEDED,
    exercise
  };
}

const newExerciseFailed = errorMessage => {
  return {
    type: NEW_EXERCISE_FAILED,
    errorMessage
  }
}

export const inputExercise = text => {
  return {
    type: INPUT_EXERCISE,
    text
  }
};

export const createExercise = name => {
  return (dispatch) => {
    dispatch({ type: NEW_EXERCISE_LOADING });
    return Exercise.create(name)
    .then(({ exercise }) => {
      dispatch(newExerciseSucceeded(exercise));
      Actions.exercisesIndex();
    })
    .catch(errorMessage => {
      console.error(errorMessage);
      return dispatch(newExerciseFailed(errorMessage))
    })
  }
};
