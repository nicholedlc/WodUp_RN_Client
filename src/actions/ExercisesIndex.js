import {
  EXERCISES_SUCCEEDED,
  EXERCISES_LOADING,
  EXERCISES_ERRORED
} from './types';

const exercisesErrored = bool => {
  return {
    type: EXERCISES_ERRORED,
    errored: bool
  };
};

const exercisesLoading = bool => {
  return {
    type: EXERCISES_LOADING,
    loading: bool
  };
};

const exercisesSucceeded = exercises => {
  return {
    type: EXERCISES_SUCCEEDED,
    exercises
  };
};

export const fetchExercises = (url) => {
  console.log(url); // http://localhost:3636/api/exercises
  return (dispatch) => {
    dispatch(exercisesLoading(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(({exercises}) => {
        dispatch(exercisesLoading(false));
        return dispatch(exercisesSucceeded(exercises));
      })
      .catch((errorMessage) => {
        console.info(errorMessage);
        return dispatch(exercisesErrored(true));
      })
  };
}
