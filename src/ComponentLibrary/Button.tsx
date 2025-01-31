import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { color } from '../Utilities/ColorConstants';
import { spacing, fonts, textProps, buttonType, buttonSize } from '../Utilities/SpacingConstant';

interface ButtonPropsTypes {
    type?: number | undefined;
    size?: number | undefined;
    label?: string | undefined;
    onPress?: () => void;
    isBold?: boolean | undefined;
    disableColor?: string | undefined;
    textColor?: string | undefined;
    customStyle?: ViewStyle | undefined;
    width?: string | number | undefined;
    upsellText?: boolean | undefined;
    opacity?: number | undefined;
    customLabelStyle?: any;
    isAddProf?: boolean | undefined;
    isSeeSurprises?: boolean | undefined;
    isIconLabel?: boolean | undefined;
    isError?: boolean | undefined;
    bgColor?: string | undefined;
    disabled?: boolean;

}

export const Button = (props: ButtonPropsTypes) => {
    const type = props.type ?? buttonType.PRIMARY
    const size = props.size ?? buttonSize.FLEXI
    const disabled = ('disabled' in props) ? props.disabled : false
    const label = props.label ?? 'Button'
    const onClicked = props.onPress ?? null
    const isBold = props.isBold ?? null
    const bgColor = disabled && props.disableColor ? props.disableColor : disabled ? type === buttonType.PRIMARY ? color.LIGHT_GREY : color.PRIMARY_DARK_1 : props.bgColor ? props.bgColor : type === buttonType.PRIMARY ? color.PRIMARY_DARK_1 : color.TRANSPARENT
    const textColor = props.textColor ? props.textColor : type === buttonType.PRIMARY ? color.WHITE : disabled ? color.SECONDARY_DARK_5 : color.SECONDARY_DARK_1
    const customStyle = props.customStyle ?? {}
    const width = props.width ?? '100%'
    const textPro = props.upsellText ? { ...textProps.META_DATA_5_NEW } : type === buttonType.SECONDARY ? { ...textProps.BANNER_SUBTEXT } : { ...textProps.META_DATA_2 }
    const activeOpacity = props.opacity ?? 0.2
    const isAddProf = props.isAddProf ?? null
    const smallButtonWithUnderline =  customStyle.borderWidth == 0 && buttonType.SECONDARY && buttonSize.SMALL
    const customLabelStyle = props.customLabelStyle ?? {}
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                onPress={onClicked ? onClicked : undefined}
                disabled={!!disabled}
                activeOpacity={activeOpacity}
                style={{
                    paddingHorizontal: size === buttonSize.FLEXI || size === buttonSize.SMALL ? spacing.WIDTH_20 : 0,
                    backgroundColor: bgColor,
                    borderRadius: spacing.WIDTH_30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width,
                    height: size === buttonSize.SMALL ? spacing.WIDTH_30 : spacing.WIDTH_40,
                    borderWidth: type === buttonType.SECONDARY || props.isSeeSurprises ? 1 : 0,
                    borderColor: type === buttonType.SECONDARY ? disabled ? color.SECONDARY_DARK_5 : color.SECONDARY_DARK_1 : props.isSeeSurprises ? 'white' : color.TRANSPARENT,
                    ...customStyle
                }}
            >
                {
                    props.isIconLabel ?
                        <View style={{ flexDirection: 'row', }}>
                            <Image
                                resizeMode="contain"
                                style={{
                                    height: spacing.WIDTH_16,
                                    marginTop: spacing.WIDTH_2,
                                }}
                                source={require('../Assets/Icons/Webp/ic_errorToast.webp')}>

                            </Image>
                            <Text style={{
                                fontFamily: isBold ? fonts.BOLD : isAddProf ? fonts.MEDIUM : fonts.REGULAR,
                                color: textColor,
                                marginLeft: -spacing.WIDTH_10
                            }}>{label}</Text>
                        </View>
                        :
                        props?.isError ?
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    resizeMode="contain"
                                    style={{
                                        height: spacing.WIDTH_16,
                                        width: spacing.WIDTH_16,
                                        marginTop: spacing.WIDTH_2
                                    }}
                                    source={require('../Assets/Icons/Webp/ic_errorToast.webp')}>
                                </Image>
                                <Text style={[textPro, {
                                    fontFamily: fonts.BOLD,
                                    color: color.DARK_RED,
                                    lineHeight: spacing.WIDTH_18,
                                    marginLeft: 5,
                                }, customLabelStyle]}>{label}</Text>
                            </View> :
                            <Text style={[textPro,{
                                fontFamily: isBold ? fonts.BOLD : isAddProf ? fonts.MEDIUM : fonts.REGULAR,
                                color: textColor,
                                textDecorationLine: smallButtonWithUnderline ? 'underline' : null,
                            }, customLabelStyle]}>{label}</Text>
                }

            </TouchableOpacity>
        </View>
    )

}

