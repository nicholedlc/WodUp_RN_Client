import {
  EXERCISES_SUCCEEDED,
  EXERCISES_LOADING,
  EXERCISES_FAILED
} from "./types";
import { Exercise } from "../fetches";

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

export const getExercises = () => {
  return dispatch => {
    dispatch({ type: EXERCISES_LOADING });
    return Exercise.getAll()
      .then(({ exercises }) => dispatch(exercisesSucceeded(exercises)))
      .catch(errorMessage => {
        console.error(errorMessage);
        return dispatch(exercisesFailed(errorMessage));
      });
  };
};
