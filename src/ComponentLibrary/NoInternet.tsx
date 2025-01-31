import React, {useEffect} from 'react';
import {View, Text, BackHandler , StyleSheet} from 'react-native';
import {
  buttonSize,
  buttonType,
  spacing,
  textProps,
  fontSizes,
} from '../Utilities/SpacingConstant';
import { color } from '../Utilities/ColorConstants';
import { Button } from './Button';
import { networkAvailable } from '../Utilities/Utility';
import LottieView from 'lottie-react-native';
import { strings } from '../Utilities/Language/Index';
import { navigationRef } from '../Navigation/RootNavigator';

interface NoInternetPropsTypes {
  navigation: any;
}

const NoInternet = ({
  navigation
}: NoInternetPropsTypes) => {
  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const handleTryAgain = async () => {
    const isInternetActive = await networkAvailable();

    if (isInternetActive) {
      navigationRef.current?.goBack();
    }
  };

  return (
    <>
      <View style={styles.container}>
        <LottieView
          source={require('../Assets/lottie/nointernet.json')}
          autoPlay
          loop
          speed={0.5}
          style={styles.lottieView} />

        <Text style={styles.infoText}>
         {strings.no_internet_error}
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            label={strings.try_again}
            type={buttonType.PRIMARY}
            size={buttonSize.FIXED}
            onPress={handleTryAgain}
            width={spacing.WIDTH_180}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieView: {
    height: spacing.WIDTH_188,
    width: spacing.WIDTH_188,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: spacing.WIDTH_120,
    marginVertical: spacing.WIDTH_20,
  },
  infoText: {
    ...textProps.BODY_COPY_2,
    color: color.SECONDARY_DARK_3,
    textAlign: 'center',
    marginTop: spacing.WIDTH_12,
    fontSize: fontSizes.FONT_16,
  },
  buttonContainer: {
    marginTop: spacing.WIDTH_40,
  },
});

export default NoInternet;

