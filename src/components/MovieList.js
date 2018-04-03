import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import MovieItem from './MovieItem';

class MovieList extends Component {
  render() {
    const attemptActive = this.props.attemptActive;
    const requestedRank = this.props.requestedRank;

    const movieItems = this.props.movies.map(movie => {
      return (
        <MovieItem
          onMovieItemSelect={() => {
            this.props.onMovieItemSelect(movie);
          }}
          movie={movie}
          key={movie.imdbID}
          winningItem={!attemptActive && movie.rank === requestedRank}
          showRank={!attemptActive}
          attemptActive={attemptActive}
        />
      );
    });

    return (
      <Grid columns={3} divided>
        <Grid.Row>{movieItems}</Grid.Row>
      </Grid>
    );
  }
}

export default MovieList;
