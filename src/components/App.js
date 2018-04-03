import React, { Component } from 'react';
import GameHeader from './GameHeader';
import ImdbService from '../services/ImdbService';

import './App.css';
import MovieList from './MovieList';
import RankInput from './RankInput';
import { Grid, Message, Icon } from 'semantic-ui-react';

const imdb = new ImdbService();

class App extends Component {
  constructor(props) {
    super(props);

    let persistedState = localStorage.getItem('state');
    if (persistedState) {
      this.state = JSON.parse(persistedState);
    } else {
      this.state = {
        score: 0,
        attempts: 0,
        isGameActive: false,
        attemptActive: false,
        movieList: [],
        requestedRank: 0,
        showRank: false,
        loadError: false,
        loading: false
      };
    }
  }

  componentDidUpdate() {
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  render() {
    const errorMessage = this.state.loadError ? (
      <Message
        onDismiss={() => this.setState({ loadError: false })}
        header="Load Error"
        content="Sorry we couldn't get your movies. Please try again."
      />
    ) : (
      ''
    );

    const loading = this.state.loading ? (
      <Message icon>
        <Icon name="circle notched" loading />
        <Message.Content>
          <Message.Header>Just one second</Message.Header>
          We are getting your movies.
        </Message.Content>
      </Message>
    ) : (
      ''
    );

    return (
      <Grid container style={{ padding: '5em 0em' }}>
        <Grid.Row>
          <Grid.Column>
            <GameHeader
              isGameActive={this.state.isGameActive}
              onRequestNewGame={() => this.onRequestNewGame()}
              score={this.state.score}
              attempts={this.state.attempts}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <RankInput
              onNewRank={rank => this.onNewRank(rank)}
              isGameActive={this.state.isGameActive}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <MovieList
              movies={this.state.movieList}
              onMovieItemSelect={movie => this.onMovieItemSelect(movie)}
              requestedRank={this.state.requestedRank}
              showRank={this.state.showRank}
              attemptActive={this.state.attemptActive}
            />
          </Grid.Column>
        </Grid.Row>
        {loading}
        {errorMessage}
      </Grid>
    );
  }

  onMovieItemSelect(movie) {
    this.setState({
      showRank: true,
      attemptActive: false,
      attempts: this.state.attempts + 1
    });

    if (movie.rank === this.state.requestedRank) {
      this.setState({
        score: this.state.score + 1
      });
    }
  }

  onRequestNewGame() {
    this.setState({
      isGameActive: true,
      requestedRank: 0,
      score: 0,
      attempts: 0,
      movieList: [],
      showRank: false,
      loading: false,
      loadError: false
    });
  }

  onNewRank(rank) {
    rank = parseInt(rank, 10);
    this.setState({
      isGameActive: true,
      requestedRank: rank,
      movieList: [],
      showRank: false,
      attemptActive: true,
      loading: true,
      loadError: false
    });

    imdb
      .getMoviesByRankWithAdditionalRandoms(rank)
      .then(movies => {
        this.setState({ movieList: movies, loadError: false, loading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loadError: true, loading: false });
      });
  }
}

export default App;
