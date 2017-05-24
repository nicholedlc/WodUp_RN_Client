import { AsyncStorage as AS } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { INPUT_LOGIN, RESET_LOGIN_FORM, SUBMIT_LOGIN, LOGIN_LOADING, LOGIN_SUCCEEDED } from './types';
import { User } from '../fetches';

export const inputLogIn = ({ key, value }) => {
  return {
    type: INPUT_LOGIN,
    payload: { key, value }
  };
};

export const resetLogInForm = () => {
  return { type: RESET_LOGIN_FORM }
}

const logInSucceeded = token => {
  return {
    type: LOGIN_SUCCEEDED,
    token
  };
}

export const submitLogIn = ({ email, password }) => {
  return dispatch => {
    // dispatch({ type: LOGIN_LOADING });
    return (
      User.authorize({ email, password })
        .then(json => {
          AS.setItem('JWT', json.token,  () => {
            AS.getItem('JWT', (error, token) => {
              if (error) return Promise.reject(error);
              return dispatch(logInSucceeded({ token }));
            })
          })
        })
        .then(() => Actions.showProfile())
        .catch(errorMessage => {
          console.error(errorMessage);
          // return dispatch(logInFailed(errorMessage))
        })
    );
  }
}
