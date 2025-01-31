import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { DrawerStack } from './src/Navigation/RootNavigator';
import messaging from "@react-native-firebase/messaging";
import { Alert, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store'
import { color } from './src/Utilities/ColorConstants';
import { log } from './src/Utilities/Utility';

export const navigationRef = React.createRef();

export default function App() {

  useEffect(() => {
    deviceToken();
  }, []);

  //for device Token
  const deviceToken = async () => {
    const token = await messaging().getToken();
    log(token)
  };

  //for Foreground messaging
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert(
        'A new FCM message arrived!',
        JSON.stringify(remoteMessage.notification.body),
      );
    });

    return unsubscribe;
  }, []);
  return (
    <NavigationContainer  ref={navigationRef}>
      <Provider store={Store}>
      <StatusBar backgroundColor={color.STATUS_BAR} animated barStyle={'dark-content'} />
      <DrawerStack />
      </Provider>
    </NavigationContainer>
  );
};

