import {
  EXERCISES_SUCCEEDED,
  EXERCISES_LOADING,
  EXERCISES_FAILED
} from './types';

const exercisesSucceeded = exercises => {
  return {
    type: EXERCISES_SUCCEEDED,
    exercises
  };
};

const exercisesFailed = errorMessage => {
  return {
    type: EXERCISES_FAILED,
    errorMessage
  };
};

export const fetchExercises = url => {
  return dispatch => {
    dispatch({ type: EXERCISES_LOADING });

    fetch(url)
      .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(({exercises}) => dispatch(exercisesSucceeded(exercises)))
      .catch(errorMessage => {
        console.error(errorMessage);
        return dispatch(exercisesFailed(errorMessage))
      });
  };
};
