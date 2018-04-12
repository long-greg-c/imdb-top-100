import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Ref, Form, Input, Message } from 'semantic-ui-react';

import { setRank, inputReceived } from '../actions';
import './RankInput.css';

function mapStateToProps(state) {
  return {
    isGameActive: state.gameState.isGameActive,
    isNewGame: state.gameState.isNewGame
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onNewRank: setRank,
      onInput: inputReceived
    },
    dispatch
  );
}

class RankInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputError: false,
      validRank: false
    };
    this.onNewRank = this.onNewRank.bind(this);
  }

  render() {
    // Reset the form input when a new game is requested
    // Ref to the form comes from the <Ref component wrapping the form.
    let form = this.state.formNode;
    if (this.props.isNewGame && form) {
      form.reset();
    }

    const hidden = this.props.isGameActive ? 'show' : 'hidden';
    return (
      <div className={hidden}>
        <Ref innerRef={node => this.setState({ formNode: node })}>
          <Form onSubmit={() => this.onNewRank()}>
            <Form.Group>
              <Form.Field>
                <Input
                  type="number"
                  placeholder="Enter rank 1...100"
                  onChange={(event, data) => {
                    this.onInputChange(event, data);
                  }}
                  error={this.state.inputError}
                />
              </Form.Field>
              <Form.Button
                disabled={!this.state.validRank}
                onClick={() => this.onNewRank()}
              >
                Test Me!
              </Form.Button>
            </Form.Group>
            <Message
              visible={this.state.inputError}
              error
              header="Invalid Rank"
              content="Only movie ranks between 1 and 100 are valid.."
            />
          </Form>
        </Ref>
      </div>
    );
  }

  onInputChange(event, data) {
    this.props.onInput();

    const input = data.value;

    if (input >= 1 && input <= 100) {
      this.setState({
        rank: input,
        inputError: false,
        validRank: true
      });
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

export default connect(mapStateToProps, mapDispatchToProps)(RankInput);
