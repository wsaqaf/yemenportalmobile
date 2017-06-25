import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const webViewWidth = Dimensions.get('window').width;
const webViewHeight = Dimensions.get('window').height;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerWebView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: webViewWidth,
    height: webViewHeight,
  },
});
