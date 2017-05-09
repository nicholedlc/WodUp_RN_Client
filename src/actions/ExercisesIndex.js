import {
  EXERCISES_SUCCEEDED,
  EXERCISES_LOADING,
  EXERCISES_ERRORED
} from './types';

const exercisesErrored = errorMessage => {
  return {
    type: EXERCISES_ERRORED,
    errored: errorMessage
  };
};

const exercisesSucceeded = exercises => {
  return {
    type: EXERCISES_SUCCEEDED,
    exercises
  };
};

export const fetchExercises = url => {
  console.log(url); // http://localhost:3636/api/exercises
  return dispatch => {
    dispatch({ type: EXERCISES_LOADING });

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(({exercises}) => {
        return dispatch(exercisesSucceeded(exercises));
      })
      .catch((errorMessage) => {
        console.info(errorMessage);
        return dispatch(exercisesErrored(errorMessage))
      })
  };
}
