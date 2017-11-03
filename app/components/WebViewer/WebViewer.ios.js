import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import WKWebView from 'react-native-wkwebview-reborn';

import styles from './styles';

class WebViewer extends Component {
  constructor(props) {
    super(props);
    this.state = { canGoBack: false };
  }

  render() {
    return (
      <View style={styles.container} >
        <WKWebView
          style={styles.containerWebView}
          source={{ uri: this.props.url }}
          javaScriptEnabled
          mixedContentMode={'always'}
          allowsBackForwardNavigationGestures
        />
      </View>
    );
  }
}

WebViewer.propTypes = {
  url: PropTypes.string.isRequired,
};

export default WebViewer;
