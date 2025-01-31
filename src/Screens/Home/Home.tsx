import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AppState,
  ActivityIndicator,
} from 'react-native';
import { screens } from '../../Navigation/Language/Index';
import { addNetworkListener } from '../../Utilities/Listeners';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './Dispatcher';
import { navigateToScreen } from '../../Utilities/Utility';
// import crashlytics from '@react-native-firebase/crashlytics';
import BottomNavigator from './Component/BottomNavigator';
import ModalPopup from '../../ComponentLibrary/ModalPopup';
import { ScreenProps } from '../../Navigation/RootNavigator';

const HomeScreen = (props: ScreenProps<'Home'>) => {
  const { navigation } = props;

  const [done, setDone] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  let loginTimeoutRef: any;
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchUser());
    checkEligibilityToLoginApp();
    return () => clearTimeout(loginTimeoutRef);
  }, [done]);

  const checkEligibilityToLoginApp = async () => {
    // All network related events like internet is connected or not
    // Other network related stuff
    addNetworkListener(props, AppState, clearLoginTime);
  };

  const clearLoginTime = () => {
    clearTimeout(loginTimeoutRef);
  };

  const handleCustomModalButtonClick = () => {
    // Handle button click logic for modal
    setModalVisible(false);
  };

  return (
    <View style={{ height: '100%' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Screen1')}
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 10,
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'cyan',
          }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Screen 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => crashlytics().crash()}
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 10,
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'cyan',
          }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Test Crash</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Screen2')}
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 10,
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'violet',
          }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Screen 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Screen3')}
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 10,
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'violet',
          }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Screen 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Permission')}
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 10,
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'violet',
          }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            Check Permission
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            dispatch(fetchUser());
            navigation.navigate('Screen2');
          }}
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 10,
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'violet',
          }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>API CALL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Demo')}
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 10,
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'violet',
          }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 10,
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'violet',
          }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            Bottom Modal Popup
          </Text>
          <ModalPopup
            isVisible={modalVisible}
            onClose={() => setModalVisible(false)}
            imageSource={require('../../Assets/Images/Webp/enableExcellent.webp')}
            modalText="Dynamic text goes here"
            isButtonVisible={true}
            onButtonClick={handleCustomModalButtonClick}
          />
        </TouchableOpacity>
      </View>
      <BottomNavigator />
    </View>
  );
};

export default HomeScreen;
