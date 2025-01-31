/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import { log } from './src/Utilities/Utility';

//for Background mode push notificaion
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  log('Message handled in the background!', remoteMessage);
});

//for Kill state push notificaion
messaging().getInitialNotification(async (remoteMessage) => {
  log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName.toLowerCase(), () => App);