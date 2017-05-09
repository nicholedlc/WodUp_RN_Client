import { SELECT_EXERCISE } from './types';

export const selectExercise = (exerciseId) => {
  return {
    type: SELECT_EXERCISE,
    exerciseId
  };
};
