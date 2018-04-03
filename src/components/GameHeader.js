import React from 'react';
import { Container, Header, Segment, Button, Label } from 'semantic-ui-react';

const GameHeader = props => {
  const buttonLabel = props.isGameActive ? 'New Game' : 'Play';
  const instructions = props.isGameActive
    ? 'Enter a rank of a Top 100 movie. Choose the movie that matches' +
      ' your entered rank. One point for a correct answer.'
    : '';
  return (
    <div>
      <Header as="h2" textAlign="center">
        IMDB Top 100 Movies
      </Header>
      <Container text>
        <Segment textAlign="center">
          A game to test your knowledge of IMDB's top 100 movies.
        </Segment>
        <Button primary onClick={() => props.onRequestNewGame()}>
          {buttonLabel}
        </Button>
        <Label>
          Score: {props.score} / {props.attempts}
        </Label>
      </Container>
      <b />
      <Container text style={{ padding: '1em 0em' }}>
        <p>{instructions}</p>
      </Container>
    </div>
  );
};

export default GameHeader;
