import React from 'react';
import { ActivityIndicator } from 'react-native';
import { color } from '../Utilities/ColorConstants';

export const ActivityIndicatorCustom = (props) => {
    return <ActivityIndicator size={props.size? props.size : 'large'} 
     color={props.color ? props.color : color.SECONDARY_DARK_1}
     />
}