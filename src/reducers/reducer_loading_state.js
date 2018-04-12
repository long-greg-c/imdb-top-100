import { START_NEW_GAME } from '../actions';
import { FETCHING_MOVIES } from '../actions';
import { GOT_MOVIES } from '../actions';
import { CLEAR_ERROR } from '../actions';

const initialState = { loading: false, error: false };
const loadingState = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_MOVIES:
      return { ...state, loading: true, error: false };
    case GOT_MOVIES:
      if (action.error) {
        return { ...state, loading: false, error: true };
      } else {
        return { ...state, loading: false, error: false };
      }
    case CLEAR_ERROR:
    case START_NEW_GAME:
      return { ...initialState };
    default:
      return state;
  }
};

export default loadingState;
