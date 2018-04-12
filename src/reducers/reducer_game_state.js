import { GAME_STARTED, START_NEW_GAME } from '../actions';
import { SELECT_MOVIE } from '../actions';
import { GOT_MOVIES } from '../actions';

const initialState = {
  isGameActive: false,
  isAttemptActive: false,
  isNewGame: false
};

const gameState = (state = initialState, action) => {
  switch (action.type) {
    case GAME_STARTED:
      return { ...state, isNewGame: false };
    case SELECT_MOVIE:
      return { ...state, isAttemptActive: false };
    case GOT_MOVIES:
      if (action.error) {
        return { ...state, isAttemptActive: false };
      }
      return { ...state, isAttemptActive: true };
    case START_NEW_GAME:
      return {
        ...state,
        isGameActive: true,
        isAttemptActive: false,
        isNewGame: true
      };

    default:
      return state;
  }
};

export default gameState;
