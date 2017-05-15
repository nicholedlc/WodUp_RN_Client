import { INPUT_LOG,
  PICK_IMAGE,
  NEW_LOG_SUCCEEDED,
  NEW_LOG_LOADING,
  NEW_LOG_FAILED,
  RESET_NEW_LOG_FORM
} from '../actions/types';

const INITIAL_STATE = {
  date: new Date(),
  rep: null,
  set: null,
  weight: null,
  note: null,
  imageUrl: null,
  uri: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_LOG:
      return { ...state, [action.payload.key]: action.payload.val };
    case PICK_IMAGE:
      return { ...state, uri: action.uri };
    case NEW_LOG_LOADING:
      return { ...state, loading: true, errorMessage: '' }
    case NEW_LOG_SUCCEEDED:
      return { ...state, loading: false, errorMessage: '', ...action.log }
    case NEW_LOG_FAILED:
      return { ...state, loading: false, errorMessage: action.errorMessage }
    case RESET_NEW_LOG_FORM:
      return { ...state, ...INITIAL_STATE }
    default:
      return state;
  }
}
