import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { WebViewer } from '../components/WebViewer';
import { getUnblockedUrl } from '../utils/blocked';

class Home extends Component {
  state = {
    found: false,
    url: '',
  }

  componentWillMount() {
    getUnblockedUrl()
      .then(result => {
        this.setState({ found: result.found });
        this.setState({ url: result.url })
      });
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={true} backgroundColor={'transparent'} barStyle='dark-content' />
        {this.state.found && <WebViewer url={this.state.url} />}
      </Container>
    );
  }
}

export default Home;
