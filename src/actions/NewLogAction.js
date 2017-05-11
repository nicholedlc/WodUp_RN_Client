import { CREATE_NEW_LOG } from './types';

export const createNewLog = (bool) => {
  return {
    type: CREATE_NEW_LOG,
    bool
  }
}
