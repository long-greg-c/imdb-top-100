import ImdbService from '../services/ImdbService';
const imdb = new ImdbService();

/*
 * action types
 */

export const SELECT_MOVIE = 'SELECT_MOVIE';
export const START_NEW_GAME = 'START_NEW_GAME';
export const GAME_STARTED = 'GAME_STARTED';
export const INCREMENT_SCORE = 'INCREMENT_SCORE';
export const GOT_MOVIES = 'GOT_MOVIES';
export const FETCHING_MOVIES = 'FETCHING_MOVIES';
export const CLEAR_ERROR = 'CLEAR_ERROR';

/*
 * action creators
 */

export function selectMovie(movie) {
  return function(dispatch, getState) {
    dispatch({ type: SELECT_MOVIE });
    if (getState().requestedRank === movie.rank) {
      dispatch({ type: INCREMENT_SCORE });
    }
  };
}

export function setRank(rank) {
  rank = parseInt(rank, 10);

  return function(dispatch, getState) {
    dispatch({ type: FETCHING_MOVIES, payload: rank });
    dispatch(getMovies(rank));
  };
}

export function inputReceived() {
  return {
    type: GAME_STARTED
  };
}

export function startNewGame() {
  return { type: START_NEW_GAME };
}

function getMovies(rank) {
  let moviesPromise = imdb.getMoviesByRankWithAdditionalRandoms(rank);

  return { type: GOT_MOVIES, payload: moviesPromise };
}

export function clearError() {
  return { type: CLEAR_ERROR };
}
