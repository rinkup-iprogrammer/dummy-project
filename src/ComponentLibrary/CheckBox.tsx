import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {color} from '../Utilities/ColorConstants';
import {spacing, textProps} from '../Utilities/SpacingConstant';

interface CheckBoxPropsTypes {
  styles?:any;
  onClick?: ()=>void;
  isChecked?: boolean;
  checkedImage?: any;
  uncheckedImage?: any;
  label?: string;
  checkboxStyles?: any;
  labelStyles?: any;
}

export function CheckBox(props: CheckBoxPropsTypes) {
  return (
    <View style={{...props.styles}}>
      <Pressable
        onPress={props.onClick}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={
            props.isChecked
              ? props.checkedImage ||
                require('../Assets/Icons/Webp/checkbox-checked.webp')
              : props.uncheckedImage ||
                require('../Assets/Icons/Webp/checkbox-unchecked.webp')
          }
          style={{
            width: spacing.WIDTH_20,
            height: spacing.WIDTH_20,
            ...props.checkboxStyles,
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            ...textProps.BODY_COPY_3,
            color: color.SECONDARY_DARK_1,
            marginLeft: spacing.WIDTH_8,
            ...props.labelStyles,
          }}>
          {props.label}
        </Text>
      </Pressable>
    </View>
  );
}

// Set default props
CheckBox.defaultProps = {
  styles: {},
  onClick: () => null,
  isChecked: false,
  checkboxStyles: {},
  labelStyles: {},
};
