import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { WebViewer } from '../components/WebViewer';

export default () =>
  <Container>
    <StatusBar translucent={true} backgroundColor={'transparent'} barStyle='light-content' />
    <WebViewer url={'https://beta.yemenportal.net'} />
  </Container>;
