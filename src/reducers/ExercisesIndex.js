export const exercisesErrored = (state = false, action) => {
  switch(action.type) {
    case 'EXERCISES_ERRORED':
      return action.errored;
    default:
      return state;
  }
}

export const exercisesLoading = (state = false, action) => {
  switch(action.type) {
    case 'EXERCISES_LOADING':
      return action.loading;
    default:
      return state;
  }
}

export const exercises = (state = [], action) => {
  switch(action.type) {
    case 'EXERCISES_SUCCEEDED':
      return action.exercises;
    default:
      return state;
  }
}
