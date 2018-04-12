import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const LoadingView = () => (
  <div>
    <Dimmer active>
      <Loader size="large">Loading</Loader>
    </Dimmer>
  </div>
);

export default LoadingView;
