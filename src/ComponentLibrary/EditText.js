import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Animated,
  Pressable,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  spacing,
  fontSizes,
  fonts,
  textProps,
  ISIPAD,
} from '../Utilities/SpacingConstant';
import {color} from '../Utilities/ColorConstants';
import { ActivityIndicatorCustom } from './ActivityIndicator'; 

const EditText = (props) => {
  const [isFieldActive, setIsFieldActive] = useState(false);
  const value = props.value ? props.value : '';
  const position = useRef(
    new Animated.Value(
      props.value === null || props.value === ''
        ? -14
        : ISIPAD
        ? spacing.WIDTH_14
        : 9,
    ),
  );

  const inputRef = useRef(null);

  useEffect(() => {
    if (props.isAutoFocus) {
      handleFocus();
    }
  }, []);

  const handleFocus = () => {
    if (!isFieldActive) {
      setIsFieldActive(true);
      Animated.timing(position.current, {
        toValue: ISIPAD ? spacing.WIDTH_14 : spacing.WIDTH_10,
        duration: 200,
      }).start();
    }
    props?.onFocusChange ? props?.onFocusChange(true) : null;
  };

  const handleOffFocus = () => {
    if (isFieldActive) {
      setIsFieldActive(false);
      Animated.timing(position, {
        toValue: 0,
        duration: 200,
      }).start();
    }
  };

  const handleBlur = () => {
    if (
      isFieldActive &&
      (props.value === null || props.value === '') &&
      !props.isRupeesSymbolShow
    ) {
      setIsFieldActive(false);
      Animated.timing(position.current, {
        toValue: -14,
        duration: 200,
      }).start();
      props?.onFocusChange ? props?.onFocusChange(false) : null;
    }
  };

  const returnAnimatedTitleStyles = () => {
    if (!props.noAnimatingPlaceholder) {
      return {
        top: position.current.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
        }),
      };
    } else {
      return {
        opacity: position.current.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
        }),
      };
    }
  };

  const returnAnimatedTextSize = () => {
    return {
      fontSize: position.current.interpolate({
        inputRange: [0, 0],
        outputRange: [spacing.WIDTH_16, spacing.WIDTH_12],
      }),
    };
  };

  return (
    <View
      style={{
        paddingHorizontal: props.paddingHorizontal
          ? props.paddingHorizontal
          : 15,
        marginHorizontal: props.isUtilityHomeSearchFlag ? spacing.WIDTH_10 : 0,
        justifyContent: 'center',
        borderRadius: props.borderRadius ? props.borderRadius : 5,
        borderWidth: props.isUtilityHomeSearchFlag ? 0 : 1,
        borderBottomWidth: 1,
        borderColor: props.borderColor
          ? props.borderColor
          : color.SECONDARY_DARK_6,
        height: props.height ? props.height : spacing.WIDTH_50,
      }}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: props.paddingHorizontal ? props.paddingHorizontal : 15,
            right: props.paddingRight ? props.paddingRight : 0,
          },
          returnAnimatedTitleStyles(),
        ]}>
        {props.noAnimatingPlaceholder}
        <Animated.Text
          numberOfLines={props.numberOfLine ? props.numberOfLine : 0}
          style={[
            {
              position: 'absolute',
              paddingHorizontal: props.circleIDError ? 0 : 5,
              top: props.noAnimatingPlaceholder
                ? props.noAnimatingPlaceholderStyle
                  ? spacing.WIDTH_12
                  : spacing.WIDTH_18
                : -3,
              fontFamily:
                props.isFromBillDetail && isFieldActive
                  ? fonts.BOLD
                  : fonts.REGULAR,
              color: props.tintColor,
              backgroundColor: props.AnimPlaceHolderbackgroundColor
                ? props.AnimPlaceHolderbackgroundColor
                : '#fff',
            },
            returnAnimatedTextSize(),
          ]}>
          {props.placeHolder}
          {props.textInputRequired ? (
            <Text
              style={{
                color: '#b30e0e',
                fontSize: fontSizes.FONT_12,
                fontFamily: fonts.MEDIUM,
              }}>
              *
            </Text>
          ) : null}
        </Animated.Text>
      </Animated.View>

      {props.rightIcon ? (
        <TouchableOpacity
          activeOpacity={1}
          style={{
            position: 'absolute',
            right: props.paddingHorizontal
              ? props.paddingHorizontal - 5
              : spacing.WIDTH_10,
            zIndex: 1,
          }}>
          <Image
            source={props.rightIcon}
            style={{
              width: spacing.WIDTH_24,
              height: spacing.WIDTH_24,
              marginRight: spacing.WIDTH_4,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : null}
      {props.isSearch && (
        <Pressable
          style={{
            position: 'absolute',
            right: props.paddingHorizontal
              ? props.paddingHorizontal - 5
              : spacing.WIDTH_10,
            zIndex: 1,
          }}
          onPress={() => inputRef.current.focus()}>
          <Image
            source={require('../Assets/Icons/Webp/ic_search.webp')}
            style={{
              width: spacing.WIDTH_24,
              height: spacing.WIDTH_24,
              marginRight: spacing.WIDTH_4,
            }}
            resizeMode="contain"
          />
        </Pressable>
      )}

      {!props.isSearch && props.isEdit && (
        <Pressable
          style={{
            position: 'absolute',
            right: props.paddingHorizontal
              ? props.paddingHorizontal - 5
              : spacing.WIDTH_10,
            zIndex: 1,
            backgroundColor: 'white',
          }}
          onPress={() => {
            inputRef.current.focus();
            props.onEditClick();
          }}>
          <Image
            source={
              props.isFromBillDetail
                ? require('../Assets/Icons/Webp/ic_edit_black.webp')
                : require('../Assets/Icons/Webp/ic_edit.webp')
            }
            style={{
              width: spacing.WIDTH_24,
              height: spacing.WIDTH_24,
              tintColor: props.tintColorForEditIcon ? '#2f3043' : null,
            }}
            resizeMode="contain"
          />
        </Pressable>
      )}

      {props.isCalendar && (
        <Pressable
          style={{
            position: 'absolute',
            right: props.paddingHorizontal
              ? props.paddingHorizontal - 5
              : spacing.WIDTH_10,
            zIndex: 1,
          }}
          onPress={() => props.onCalendar()}
          disabled={props.isShowActivityIndicator}>
          <Image
            source={require('../Assets/Icons/Webp/ic_calender_dark.webp')}
            style={{width: spacing.WIDTH_24, height: spacing.WIDTH_24}}
            resizeMode="contain"
          />
        </Pressable>
      )}

      {!props.isSearch && props.isPhoneBook && (
        <Pressable
          style={{
            position: 'absolute',
            right: props.paddingHorizontal
              ? props.paddingHorizontal - 5
              : spacing.WIDTH_10,
            zIndex: 1,
          }}
          onPress={() => props.onPhoneBook()}
          disabled={props.isShowActivityIndicator}>
          {props.circleIDError ? (
            <Image
              source={require('../Assets/Icons/Webp/phonebook_new.webp')}
              style={{
                width: spacing.WIDTH_24,
                height: spacing.WIDTH_24,
                marginRight: spacing.WIDTH_6,
              }}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require('../Assets/Icons/Webp/ic_phonebook.webp')}
              style={{width: spacing.WIDTH_24, height: spacing.WIDTH_24}}
              resizeMode="contain"
            />
          )}
        </Pressable>
      )}

      {!props.isShowActivityIndicator
        ? !props.isSearch &&
          props.isClose && (
            <Pressable
              style={{
                position: 'absolute',
                right: props.isPhoneBook ? spacing.WIDTH_50 : spacing.WIDTH_10,
                zIndex: 1,
              }}
              onPress={() => {
                props.onClose();
                props.isFromBillDetail ? null : handleOffFocus();
              }}>
              {props.isSeprator && (
                <View
                  style={{
                    borderColor: '#eaeaec',
                    height: spacing.WIDTH_24,
                    borderLeftWidth: 2,
                    right: -spacing.WIDTH_8,
                    position: 'absolute',
                  }}
                />
              )}
              <Image
                source={
                  props.isFromBillDetail || props.isFromHelpAndSupportSearchBar
                    ? require('../Assets/Icons/Webp/ic_close_black.webp')
                    : require('../Assets/Icons/Webp/ic_close.webp')
                }
                style={{width: spacing.WIDTH_24, height: spacing.WIDTH_24}}
                resizeMode="contain"
              />
            </Pressable>
          )
        : null}

      {props.isShowActivityIndicator ? (
        <View
          style={{
            position: 'absolute',
            right:
              rightIcon || props.isSearch || props.isPhoneBook
                ? spacing.WIDTH_50
                : spacing.WIDTH_10,
            zIndex: 1,
          }}>
          <ActivityIndicatorCustom
          color={props.isPromoCode ? color.WHITE : color.SECONDARY_DARK_1}
          />
        </View>
      ) : null}

      {props.isCurrencySymbolShow ? (
        <View
          style={{
            position: 'absolute',
            left: spacing.WP_16,
            zIndex: 1,
            height: '100%',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: fontSizes.FONT_16,
              alignSelf: 'center',
              marginTop: spacing.HP_3,
            }}>
            {'\u20B9'}
          </Text>
        </View>
      ) : null}

      {props.isRupeesSymbolShow ? (
        <View
          style={{
            position: 'absolute',
            left: spacing.WP_16,
            zIndex: 1,
            height: '100%',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: fontSizes.FONT_16,
              alignSelf: 'center',
              marginTop: spacing.WIDTH_2,
              ...props.customStyleForRupeesSymbol,
            }}>
            {'₹'}
          </Text>
        </View>
      ) : null}

      {props.isShowRightArrow ? (
        <Pressable
          style={{
            position: 'absolute',
            right: spacing.WIDTH_10,
            zIndex: 1,
            backgroundColor: color.ACCENT_LIGHT_1,
            borderRadius: 12,
            height: spacing.WIDTH_28,
            width: spacing.WIDTH_28,
            justifyContent: 'center',
          }}
          onPress={() => props.onRightArrowClick()}>
          <Image
            source={require('../Assets/Icons/Webp/ic_right_arrow.webp')}
            style={{
              width: spacing.WIDTH_22,
              height: spacing.WIDTH_22,
              marginLeft: spacing.WIDTH_4,
            }}
            resizeMode="contain"
          />
        </Pressable>
      ) : null}

      {props.isShowApply ? (
        <Pressable
          style={{position: 'absolute', right: spacing.WIDTH_16, zIndex: 1}}
          disabled={props.disableApply}
          onPress={() => props.onApplyClick()}>
          <Text
            style={{
              ...textProps.BANNER_SUBTEXT_MEDIUM,
              textDecorationLine: 'underline',
              color: props.disableApply
                ? color.SECONDARY_DARK_5
                : color.SECONDARY_DARK_1,
            }}>
            apply
          </Text>
        </Pressable>
      ) : null}

      {props.isCard && (
        <View
          style={{
            position: 'absolute',
            right: props.paddingHorizontal
              ? props.paddingHorizontal - 5
              : spacing.WIDTH_10,
            zIndex: 1,
          }}>
          {props?.cardBrand ? (
            <Image
              source={{uri: props?.cardBrand}}
              style={{width: spacing.WIDTH_24, height: spacing.WIDTH_24}}
              resizeMode="contain"
            />
          ) : null}
        </View>
      )}

      {props.isShowResendOTP ? (
        <Pressable
          style={{position: 'absolute', right: spacing.WIDTH_16, zIndex: 1}}
          disabled={props.disableApply}
          onPress={() => props.onResendOTP()}>
          <Text
            style={{
              ...textProps.BANNER_SUBTEXT_MEDIUM,
              textDecorationLine: 'underline',
              color: props.disableApply
                ? color.SECONDARY_DARK_5
                : color.SECONDARY_DARK_1,
            }}>
            resend OTP
          </Text>
        </Pressable>
      ) : null}

      {props.isShowVerify ? (
        <Pressable
          style={{position: 'absolute', right: spacing.WIDTH_16, zIndex: 1}}
          disabled={props.disableApply}
          onPress={() => props.onVerifyUPI()}>
          <Text
            style={{
              ...textProps.BANNER_SUBTEXT_MEDIUM,
              textDecorationLine: 'underline',
              color: props.disableApply
                ? color.SECONDARY_DARK_5
                : color.SECONDARY_DARK_1,
            }}>
            verify
          </Text>
        </Pressable>
      ) : null}

      {props.isShowRedeem ? (
        <Pressable
          style={{
            position: 'absolute',
            right: spacing.WIDTH_10,
            zIndex: 1,
          }}
          onPress={() => props.onRedeemClick()}
          disabled={props.disabledRedeem}>
          <Text
            style={{
              ...textProps.DATA_TYPE,
              color: props.disabledRedeem
                ? color.SECONDARY_DARK_4
                : color.WHITE,
            }}>
            {'redeem'}
          </Text>
        </Pressable>
      ) : null}

      <View
        style={{
          justifyContent: 'center',
          paddingLeft:
            (props.isCurrencySymbolShow
              ? Platform.OS == 'ios'
                ? spacing.WIDTH_16
                : spacing.WIDTH_10
              : 0) ||
            (props.isRupeesSymbolShow
              ? Platform.OS == 'ios'
                ? spacing.WIDTH_10
                : spacing.WIDTH_8
              : 0),
        }}>
        <TextInput
          {...props}
          autoFocus={props.isAutoFocus}
          allowFontScaling={false}
          onChangeText={(text) => props.onChangeText(text)}
          style={{
            ...textProps.BODY_COPY_1,
            height: '100%',
            width: '100%',
            paddingRight:
              props.isEdit || props.isShowRightArrow
                ? spacing.WIDTH_24
                : props.isShowVerify
                ? spacing.WIDTH_50
                : 0,
            color: props.inputDisable ? color.SECONDARY_DARK_4 : '#2f3043',
            ...props.customStyle,
            textAlignVertical: props.alignTop ? 'top' : 'center',
            letterSpacing: props.isPromoCode || props.isPromo ? 4 : undefined,
          }}
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
          value={value}
          onSubmitEditing={() =>
            props.onSubmitEditing ? props.onSubmitEditing : null
          }
          contextMenuHidden={props.isLoginNumber ? false : true}
          maxLength={
            props.maxLength
              ? props.maxLength
              : props?.noMaxLength
              ? undefined
              : 10
          }
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          ref={inputRef}
          returnKeyType={
            props.multiline && Platform.OS == 'ios' ? 'default' : 'done'
          }
          autoCorrect={false}
        />
      </View>
    </View>
  );
};
export default EditText;
