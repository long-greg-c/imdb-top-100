import { FETCHING_MOVIES } from '../actions';

const requestedRank = (state = 0, action) => {
  switch (action.type) {
    case FETCHING_MOVIES:
      return action.payload;
    default:
      return state;
  }
};

export default requestedRank;
