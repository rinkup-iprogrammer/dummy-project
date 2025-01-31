import React, {useState, useEffect} from 'react';
import {View, Text, Button, PermissionsAndroid, Alert} from 'react-native';

const Permission = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app requires access to your location.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setHasPermission(true);
      } else {
        showPermissionDeniedAlert();
      }
    } catch (error) {
      console.error('Error requesting permission:', error);
    }
  };

  const showPermissionDeniedAlert = () => {
    Alert.alert(
      'Permission Denied',
      'You have denied access to the location. Please grant permission to use this page.',
      [
        {
          text: 'Go Back',
          onPress: () => navigation.goBack(), // Redirect user to previous screen
          style: 'cancel',
        },
        {
          text: 'Grant Permission',
          onPress: () => checkPermission(), // Request permission again
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {hasPermission ? (
        <Text>Access granted! You can use the page now.</Text>
      ) : (
        <Text>Waiting for permission...</Text>
      )}
    </View>
  );
};

export default Permission;
