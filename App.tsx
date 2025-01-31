import React, { useEffect } from 'react';
import messaging from "@react-native-firebase/messaging";
import { Alert, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store'
import { color } from './src/Utilities/ColorConstants';
import { log } from './src/Utilities/Utility';
import NavContainer  from './src/Navigation/RootNavigator';
import 'react-native-gesture-handler';

export default function App() {

  useEffect(() => {
    deviceToken();
  }, []);

  //for device Token
  const deviceToken = async () => {
    console.log("deviceToken-->");
    const token = await messaging().getToken();
    console.log("token-->", token);
    log(token, "");
  };

  //for Foreground messaging
  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async (remoteMessage) => {
  //     if (remoteMessage.notification) {
  //       Alert.alert(
  //         'A new FCM message arrived!',
  //         JSON.stringify(remoteMessage.notification.body),
  //       );
  //     } else {
  //       console.log('No notification payload in the message.');
  //     }
  //   });

  //   return unsubscribe;
  // }, []);

  return (
    <>
      <StatusBar backgroundColor={color.STATUS_BAR} animated barStyle={'dark-content'} />
      <Provider store={Store}>
        <NavContainer />
      </Provider>
    </>
  );
};

