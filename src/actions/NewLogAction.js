import {
  INPUT_LOG,
} from './types';

export const inputLog = ({ key, val }) => {
  console.log({ key, val })
  return {
    type: INPUT_LOG,
    payload: { key, val }
  }
}
