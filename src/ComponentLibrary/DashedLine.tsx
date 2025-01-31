import React from 'react';
import { View, StyleSheet } from 'react-native';

interface DashedLinePropsTypes {
  width?: any;
  color?: string;
  dashLength?: any;
  dashGap?: number;
  orientation?: 'horizontal' | 'vertical';
  numberOfDashes?: number;
}

const DashedLine = ({
  width,
  color,
  dashLength,
  dashGap,
  orientation,
  numberOfDashes
}: DashedLinePropsTypes) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
      width: orientation === 'vertical' ? 1 : (width ? width : "auto"),
      height: orientation === 'vertical' ? width : 1,
    },
    dash: {
      flex: 1,
      height: orientation === 'vertical' ? dashLength : 1,
      width: orientation === 'vertical' ? 1 : dashLength,
      backgroundColor: color,
      margin: orientation === 'vertical' ? (dashGap?(dashGap / 1):0) : 0,
       marginRight: orientation === 'horizontal' ? dashGap?(dashGap / 2):0 : 0,
    },
  });

  // const numberOfDashes = Math.ceil(width / (dashLength + dashGap));

  return (
     <View style={styles.container}>
      {[...Array(numberOfDashes)].map((_, index) => (
        <View key={index} style={styles.dash} />
      ))}
    </View>
  );
};

export default DashedLine;


