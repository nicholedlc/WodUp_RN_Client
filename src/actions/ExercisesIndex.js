import { 
  EXERCISES_SUCCEEDED,
  EXERCISES_LOADING,
  EXERCISES_ERRORED
} from './types';

export const exercisesErrored = bool => { //remove export because these functions are not used outside of this file
  return {
    type: EXERCISES_ERRORED, // add in a TYPE file
    errored: bool
  };
};

export const exercisesLoading = bool => {
  return {
    type: EXERCISES_LOADING,
    loading: bool
  };
};

export const exercisesSucceeded = exercises => {
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
        dispatch(exercisesLoading(false)); //should handle changing of state in the reducer!!!
        return dispatch(exercisesSucceeded(exercises));
      })
      .catch((errorMessage) => {
        console.info(errorMessage);
        return dispatch(exercisesErrored(true)); //should handle changing of state in the reducer!!!
      })
  };
}
