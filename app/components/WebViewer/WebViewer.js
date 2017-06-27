import React, { PropTypes } from 'react';
import { View, WebView } from 'react-native';

import styles from './styles';

const WebViewer = ({ url }) => (
  <View style={styles.container}>
    <WebView style={styles.containerWebView} source={{ uri: url }} javaScriptEnabled mixedContentMode={'always'} />
  </View>
);

WebViewer.propTypes = {
  url: PropTypes.string.isRequired,
};

export default WebViewer;
