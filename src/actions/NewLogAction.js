import {
  INPUT_LOG,
  PICK_IMAGE
} from './types';

export const inputLog = ({ key, val }) => {
  console.log({ key, val })
  return {
    type: INPUT_LOG,
    payload: { key, val }
  }
}

export const pickImage = uri => {
  return {
    type: PICK_IMAGE,
    uri
  }
}
