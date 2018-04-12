import { INCREMENT_SCORE } from '../actions';
import { SELECT_MOVIE } from '../actions';
import { START_NEW_GAME } from '../actions';

const initialState = { attempts: 0, score: 0 };
const score = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MOVIE:
      return { ...state, attempts: state.attempts + 1 };
    case INCREMENT_SCORE:
      return { ...state, score: state.score + 1 };
    case START_NEW_GAME:
      return initialState;
    default:
      return state;
  }
};

export default score;
