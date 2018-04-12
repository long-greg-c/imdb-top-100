import { FETCHING_MOVIES, GOT_MOVIES } from '../actions';
import { START_NEW_GAME } from '../actions';

const movieListReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_MOVIES:
      if (action.error) {
        return [];
      }
      return action.payload;
    case FETCHING_MOVIES:
    case START_NEW_GAME:
      return [];
    default:
      return state;
  }
};

export default movieListReducer;
