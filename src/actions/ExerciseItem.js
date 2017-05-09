import { SELECT_EXERCISE } from './types';

export const selectExercise = exercise => {
  console.log(exercise);
  return {
    type: SELECT_EXERCISE,
    exercise
  };
};
