import { combineReducers } from 'redux';
import ScoreReducer from './reducer_score';
import MovieListReducer from './reducer_movie_list';
import GameStateReducer from './reducer_game_state';
import RequestedRankReducer from './reducer_requested_rank';
import LoadingStateReducer from './reducer_loading_state';

export default combineReducers({
  score: ScoreReducer,
  movieList: MovieListReducer,
  gameState: GameStateReducer,
  requestedRank: RequestedRankReducer,
  loadingState: LoadingStateReducer
});
