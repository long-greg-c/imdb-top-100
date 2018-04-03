import React, { Component } from 'react';
import { Item, Grid, Label, Segment } from 'semantic-ui-react';
import './MovieItem.css';

class MovieItem extends Component {
  render() {
    const movie = this.props.movie;
    const showRank = this.props.showRank;
    const hoverActive = this.props.attemptActive
      ? 'hover-active'
      : 'hover-disabled';

    const background =
      this.props.winningItem && !this.props.attemptActive
        ? 'winning-item'
        : 'losing-item';

    return (
      <Grid.Column>
        <Segment raised className={hoverActive + ' ' + background}>
          <Label
            as="a"
            color={this.props.winningItem ? 'green' : 'red'}
            ribbon
            className={showRank ? 'show' : 'hidden'}
          >
            {movie.rank}
          </Label>
          <Item
            onClick={() => {
              this.props.onMovieItemSelect(movie);
            }}
          >
            <Item.Image size="large" src={movie.Poster} />

            <Item.Content>
              <Item.Header>{movie.Title}</Item.Header>
              <Item.Meta>{movie.imdbRating}</Item.Meta>
              <Item.Extra />
            </Item.Content>
          </Item>
        </Segment>
      </Grid.Column>
    );
  }
}

export default MovieItem;
