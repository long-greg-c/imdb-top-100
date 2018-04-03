import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';
import './RankInput.css';

class RankInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rank: 0,
      inputError: false,
      validRank: false
    };
    this.onNewRank = this.onNewRank.bind(this);
  }

  render() {
    const hidden = this.props.isGameActive ? 'show' : 'hidden';
    return (
      <div className={hidden}>
        <Input
          placeholder="Rank 1...100"
          onChange={(event, data) => {
            this.onInputChange(event, data);
          }}
          error={this.state.inputError}
          onKeyUp={event => {
            this.onInputKeyUp(event);
          }}
        />
        <Button
          attached="right"
          disabled={!this.state.validRank}
          onClick={() => this.onNewRank()}
        >
          Test Me!
        </Button>
      </div>
    );
  }

  onInputKeyUp(event) {
    if (event.keyCode === 13) {
      this.onNewRank();
    }
  }

  onInputChange(event, data) {
    const input = data.value;

    if (input >= 1 && input <= 100) {
      this.setState({ rank: input, inputError: false, validRank: true });
    } else if (input === '') {
      this.setState({ inputError: false, validRank: false });
    } else {
      this.setState({ inputError: true, validRank: false });
    }
  }

  onNewRank() {
    if (this.state.validRank) {
      this.props.onNewRank(this.state.rank);
    }
  }
}

export default RankInput;
