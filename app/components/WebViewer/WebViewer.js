import React, { Component, PropTypes } from 'react';
import { BackHandler, View, WebView } from 'react-native';

import styles from './styles';

const WEBVIEW_REF = 'WEBVIEW_REF';
const BACK_EVENT = 'hardwareBackPress';

class WebViewer extends Component {
  constructor(props) {
    super(props);
    this.state = { canGoBack: false };
  }

  componentDidMount() {
    BackHandler.addEventListener(BACK_EVENT, () => {
      if (this.state.canGoBack) {
        this.WEBVIEW_REF.goBack();
        return true;
      }
      return false;
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(BACK_EVENT);
  }

  onNavigationStateChange = (navState) => {
    this.setState({ canGoBack: navState.canGoBack });
  }

  render() {
    return (
      <View style={styles.container} >
        <WebView
          ref={(c) => {
            this.WEBVIEW_REF = c;
          }}
          style={styles.containerWebView}
          source={{ uri: this.props.url }}
          javaScriptEnabled
          mixedContentMode={'always'}
          onNavigationStateChange={this.onNavigationStateChange}
        />
      </View>
    );
  }
}

WebViewer.propTypes = {
  url: PropTypes.string.isRequired,
};

export default WebViewer;
