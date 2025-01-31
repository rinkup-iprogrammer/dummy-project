import React, {useEffect, useRef} from 'react';
import {View, Text, Image, Animated, StyleSheet} from 'react-native';
import {color, VIL_THEME} from '../Utilities/ColorConstants';
import {spacing, textProps} from '../Utilities/SpacingConstant';
import {toastType} from '../Utilities/Constants';
const Toast = ({route, navigation}) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 800,
      delay: 4000,
      useNativeDriver: true,
    }).start(() => {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    });
  }, [fadeAnim, navigation]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: route.params.isDarkToast
            ? color.SECONDARY_DARK_1
            : route.params.isCybToast
            ? color.ACCENT_DARK_3
            : route.params.toastType == toastType.SUCCESS
            ? VIL_THEME.ACCENT_LIGHT
            : route.params.toastType == toastType.UPFAILURE
            ? color.ERROR_1
            : color.ERROR_5,
          opacity: fadeAnim,
        },
      ]}>
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          {route.params.isCybToast ? (
            <Image
              source={require('../Assets/Icons/Webp/ic_info.webp')}
              style={styles.icon}
            />
          ) : route.params.toastType == toastType.FAILURE ? (
            <Image
              source={require('../Assets/Icons/Webp/ic_errorToast.webp')}
              style={styles.icon}
            />
          ) : route.params.toastType == toastType.UPFAILURE ? (
            <Image
              source={require('../Assets/Icons/Webp/ic_errorToast.webp')}
              style={styles.icon}
            />
          ) : (
            <Image
              source={require('../Assets/Icons/Webp/ic_successful.webp')}
              style={styles.icon}
            />
          )}
        </View>
        <View style={styles.textContainer}>
          {route.params.headingMessage ? (
            <View style={styles.textColumn}>
              <Text style={styles.heading}>{route.params.headingMessage}</Text>
              <Text style={styles.message}>{route.params.message}</Text>
            </View>
          ) : (
            <Text
              style={[
                styles.message,
                route.params.isCybToast ? styles.cybMessage : null,
              ]}>
              {route.params.message}
            </Text>
          )}
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: spacing.WIDTH_10,
    marginHorizontal: 16,
    position: 'absolute',
    bottom: spacing.WIDTH_16,
    justifyContent: 'center',
    alignSelf: 'center',
    minWidth: '90%',
  },
  contentContainer: {
    flexDirection: 'row',
    paddingVertical: spacing.WIDTH_12,
    paddingHorizontal: spacing.WIDTH_16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: spacing.WIDTH_10,
  },
  icon: {
    width: spacing.WIDTH_24,
    height: spacing.WIDTH_24,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  textColumn: {
    flexDirection: 'column',
  },
  heading: {
    ...textProps.DATA_TYPE,
    color: color.SECONDARY_DARK_7,
    marginLeft: spacing.WIDTH_10,
  },
  message: {
    ...textProps.BANNER_SUBTEXT,
    color: color.SECONDARY_DARK_7,
    marginLeft: spacing.WIDTH_12,
    marginTop: spacing.WIDTH_2,
  },
  cybMessage: {
    ...textProps.BANNER_SUBTEXT,
  },
});

export default Toast;
