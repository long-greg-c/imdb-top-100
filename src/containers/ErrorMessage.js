import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Message, Icon } from 'semantic-ui-react';

import { clearError } from '../actions/index';

function mapStateToProps(state) {
  return {
    loading: state.loadingState.loading,
    error: state.loadingState.error
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearError: clearError }, dispatch);
}

class ErrorMessage extends Component {
  render() {
    const errorMessage = this.props.error ? (
      <Message
        onDismiss={() => this.props.clearError()}
        header="Load Error"
        content="Sorry IMDB didn't provide your movies in a timely manner. Please try again with a new rank."
      />
    ) : (
      ''
    );

    const loading = this.props.loading ? (
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
      <div>
        {loading}
        {errorMessage}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);
