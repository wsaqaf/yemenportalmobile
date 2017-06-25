import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { WebViewer } from '../components/WebViewer';

export default () =>
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <WebViewer url={'http://example.com'} />
  </Container>;
