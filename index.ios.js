import { AppRegistry, NativeModules } from 'react-native';
import App from './App';

AppRegistry.registerComponent('yemenportalmobile', () => App);

NativeModules.RNFabric.initWithCrashlytics();
