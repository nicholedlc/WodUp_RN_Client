import { INPUT_USER } from './types';
import { User } from '../fetches';

export const inputUser = ({ key, val }) => {
  return {
    type: INPUT_USER,
    payload: { key, val }
  }
};

export const createUser = ({ signUp }) => {
  return async dispatch => {
    try {
      // dispatch({ type: NEW_USER_LOADING });
      const newUser = await User.create({ signUp });
      console.log(newUser);
    } catch (error) {
      console.log(error);
    }
  }
}
