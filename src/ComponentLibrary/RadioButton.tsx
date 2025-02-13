import React, {useEffect} from 'react';
import {StyleSheet, View, BackHandler, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle} from 'react-native';
import LottieView from 'lottie-react-native';
import {color} from '../Utilities/ColorConstants';
import {spacing, textProps} from '../Utilities/SpacingConstant';

interface RadioButtonPropsTypes {
  selected: boolean;
  onPress: () => void;
  children: string;
  style?: StyleProp<ViewStyle>;
  radioButtonTextStyle?: StyleProp<TextStyle>;
  radioButtonIconStyle?: StyleProp<ViewStyle>;
  radioButtonContainerStyle?: StyleProp<ViewStyle>;
  radioButtonIconSize?: number;
  radioButtonIconColor?: string;
  radioButtonIconBackgroundColor?: string;
  radioButtonIconBorderRadius?: number;
  radioButtonIconBorderWidth?: number;
  radioButtonIconBorderRadiusForSelected?: number;
  radioButtonIconBorderWidthForSelected?: number;
  radioButtonIconBorderRadiusForUnselected?: number;
  radioButtonIconBorderWidthForUnselected?: number;
}

const RadioButton = (props: any) => {
    const onPress = props.onPress
    const selected = props.selected
    const children = props.children
  return (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonIcon} /> : null}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.radioButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 45
      },
      radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "gray",
        alignItems: "center",
        justifyContent: "center"
      },
      radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6"
      },
      radioButtonText: {
        fontSize: 16,
        marginLeft: 16,
        color: 'black'
      }
});
