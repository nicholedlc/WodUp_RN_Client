import {
  INPUT_EXERCISE,
  NEW_EXERCISE_SUCCEEDED,
  NEW_EXERCISE_LOADING,
  NEW_EXERCISE_FAILED
} from './types';
import { Actions } from 'react-native-router-flux';

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
    fetch('http://localhost:3636/api/exercises', {
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ name })
    })
    .then(response => {
      console.info(response);
      if(!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(({ exercise }) => {
      dispatch(newExerciseSucceeded(exercise));
      Actions.exercisesIndex();
    })
    .catch(errorMessage => {
      console.info(errorMessage);
      return dispatch(newExerciseFailed(errorMessage))
    })
  }
};
