import { SELECT_EXERCISE } from './types';

export const selectExercise = (exercise) => {
  return {
    type: SELECT_EXERCISE,
    exercise
  };
};
