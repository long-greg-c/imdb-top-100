import Top100DB from '../top_100_ids'; //List of IMDB Id's from https://www.imdb.com/chart/top
import Axios from 'axios';

const OMDB_API_KEY = '2b7b925c';
const OMDB_API_URL = 'https://www.omdbapi.com/';

class ImdbService {
  /**
   * Return a promise to provide an array of three Movie objects where
   * at least one of the objects will have a top 100 rank as supplied.
   * @param rank Top 100 rank of a movie to include in the results.
   */
  getMoviesByRankWithAdditionalRandoms(rank) {
    let movies = [];
    const movieId = getImdbIdByRank(rank);

    const randRankOne = randomWithExclude(rank, 100);
    const randIdOne = getImdbIdByRank(randRankOne);
    const randRankTwo = randomWithExclude(rank, 100);
    const randIdTwo = getImdbIdByRank(randRankTwo);

    const axiosInstance = Axios.create({
      baseURL: OMDB_API_URL,
      timeout: 1000
    });

    return new Promise((resolve, reject) => {
      axiosInstance
        .get(`/?apikey=${OMDB_API_KEY}&i=${movieId}&r=json`)
        .then(response => {
          const movie = response.data;
          movie.rank = rank;
          movies.push(movie);
          return axiosInstance.get(
            `/?apikey=${OMDB_API_KEY}&i=${randIdOne}&r=json`
          );
        })
        .then(response => {
          const movie = response.data;
          movie.rank = randRankOne;
          movies.push(movie);
          return axiosInstance.get(
            `/?apikey=${OMDB_API_KEY}&i=${randIdTwo}&r=json`
          );
        })
        .then(response => {
          const movie = response.data;
          movie.rank = randRankTwo;
          movies.push(movie);
          movies = shuffle(movies);
          resolve(movies);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

export default ImdbService;

/**
 * Return an Imdb ID of the movie that has the supplied rank.
 * @param {number }rank Rank of movie to return a ID for.
 * @returns {string} IMDB ID of a movie.
 */
function getImdbIdByRank(rank) {
  const movie = Top100DB.find(movie => movie.rank === rank);
  if (movie) {
    return movie.id;
  } else return '';
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Return a random number between 1 and {limit} excluding {exclude}.
 * @param {number} exclude A number to exclude as a possible return value
 * @param {number} limit Result will be less than or equal to limit.
 * @returns {number} A random number less than or equal to {limit}.
 */
function randomWithExclude(exclude, limit) {
  let rand = null;

  while (rand === null || rand === exclude) {
    rand = Math.round(Math.random() * Math.floor(limit - 1) + 1);
  }

  return rand;
}
