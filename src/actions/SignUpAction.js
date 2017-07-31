import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { INPUT_USER, SIGNUP_LOADING, SIGNUP_SUCCEEDED, RESET_SIGNUP_FORM } from './types';
import { User } from '../fetches';

export const inputUser = ({ key, val }) => {
  return {
    type: INPUT_USER,
    payload: { key, val }
  }
};

export const resetSignUpForm = () => {
  return {
    type: RESET_SIGNUP_FORM
  };
}

const signUpSucceeded = user => {
  return {
    type: SIGNUP_SUCCEEDED,
    user
  }
}

export const createUser = ({ signUp }) => {
  const AS = AsyncStorage;
  return async dispatch => {
    try {
      // await AS.removeItem('JWT', (err, res) => console.log(res));
      dispatch({ type: SIGNUP_LOADING });
      const json = await User.createOne({ signUp });
      await AS.setItem('JWT', json.token);
      const token = await AS.getItem('JWT', (err, res) => console.log(res));
      dispatch(resetSignUpForm());
      dispatch(signUpSucceeded(json.user));
      Actions.main();
    } catch (error) {
      console.log(error);
    }
  }
}
