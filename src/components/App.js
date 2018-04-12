import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import './App.css';

import GameHeader from '../containers/GameHeader';
import MovieList from '../containers/MovieList';
import RankInput from '../containers/RankInput';
import ErrorMessage from '../containers/ErrorMessage';

class App extends Component {
  render() {
    return (
      <Grid container style={{ padding: '5em 0em' }}>
        <Grid.Row>
          <Grid.Column>
            <GameHeader />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <RankInput />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <MovieList />
          </Grid.Column>
        </Grid.Row>
        <ErrorMessage />
      </Grid>
    );
  }
}

export default App;
