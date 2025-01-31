import React from 'react';
import {StyleSheet, View, Platform, TouchableOpacity} from 'react-native';
import {color} from '../Utilities/ColorConstants';
import {spacing} from '../Utilities/SpacingConstant';
import PropTypes from 'prop-types';

export default function Card(props) {
  const styles = StyleSheet.create({
    card: {
      borderRadius: (props && props.borderRadius) || spacing.WIDTH_10,
      elevation: props.hasOwnProperty('elevation') ? props.elevation : 25,
      backgroundColor: props.backgroundColor
        ? props.backgroundColor
        : color.WHITE,
      shadowOffset: {width: 1, height: 1},
      shadowColor:
        props.hasOwnProperty('elevation') && props.elevation == 0
          ? '#fff'
          : props.shadowColor
          ? props.shadowColor
          : color.BLACK,
      shadowOpacity: props.shadowOpacity ? props.shadowOpacity : 0.2,
      shadowRadius: props.shadowRadius ? props.shadowRadius : 10,
      width: '100%',
      overflow:
        Platform.OS == 'android'
          ? props.isFromPastBills
            ? 'visible'
            : 'hidden'
          : props.overflow
          ? props.overflow
          : 'visible',
      marginBottom: props.marginBottom ? props.marginBottom : 0,
      // zIndex: 5,
      padding: props.padding ? props.padding : 0,
      ...props.customStyle,
    },
  });

  return props.hasOwnProperty('onPress') ? (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.card}>{props.children}</View>
    </TouchableOpacity>
  ) : (
    <View style={styles.card}>{props.children}</View>
  );
}

Card.propTypes = {
  elevation: PropTypes.number,
};
