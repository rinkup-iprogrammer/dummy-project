import React from 'react';
import { ActivityIndicator } from 'react-native';
import { color } from '../Utilities/ColorConstants';

interface ActivityIndicatorCustomPropsTypes {
    size?: 'small' | 'large' | undefined;
    color?: string | undefined;
}

export const ActivityIndicatorCustom = (props: ActivityIndicatorCustomPropsTypes) => {
    return <ActivityIndicator size={props.size? props.size : 'large'} 
     color={props.color ? props.color : color.SECONDARY_DARK_1}
     />
}