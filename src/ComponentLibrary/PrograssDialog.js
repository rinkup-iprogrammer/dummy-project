import React, {useEffect} from 'react';
import {StyleSheet, View, BackHandler, Text, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';
import {color} from '../Utilities/ColorConstants';
import {spacing, textProps} from '../Utilities/SpacingConstant';

const PrograssDialog = (props) => {
  // Listner use for if user press Hardware back button do Nothing
  useEffect(() => {
    // back press fuction which not navigate back screen only return true
    const backPress = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backPress);
    return () => {
      backHandler.remove()
    };
  }, []);


  return (
    <>
    <StatusBar hidden={true} />
    <View
      style={[{...styles.container, backgroundColor: 'rgba(0, 0, 0, 0.7)'}]}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <LottieView
          style={{height: spacing.WIDTH_40, width: '100%'}}
          source={require('../Assets/lottie/Hourglass.json')}
          autoPlay
          loop
        />
        <Text
          style={{
            color: color.WHITE,
            marginTop: spacing.WIDTH_40,
            ...textProps.HEADING_1_BOLD,
          }}>
          processing...
        </Text>
      </View>
    </View>
    </>
  );
};

export default PrograssDialog;

const styles = StyleSheet.create({
  container: {
    flex:1,
    position: 'absolute',
    justifyContent: 'space-evenly',
    padding: 10,
    height: '100%',
    width: '100%',
  },
});
