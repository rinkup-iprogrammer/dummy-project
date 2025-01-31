
// import React from 'react';
// import { Text, Platform } from 'react-native';
// import { color } from '../Utilities/ColorConstants';
// import { textProps } from '../Utilities/SpacingConstant';

// const DashedLine = (props) => {
//   const dashColor = props.dashColor || color.PRIMARY_DARK_1;
//   const numberOfDashes = props.numberOfDashes || 50;
//   const dashThickness = props.dashThickness || 1;

//   const dashes = Array.from({ length: numberOfDashes }, (_, index) => '').join(' ');

//   return (
//     <Text
//       style={{
//         color: dashColor,
//         ...textProps.BODY_COPY_1,
//         borderBottomWidth: dashThickness, 
//         borderColor: dashColor,
//       }}
//       numberOfLines={1}
//       ellipsizeMode="clip"
//     >
//       {dashes}
//     </Text>
//   );
// };

// export default DashedLine;
import React from 'react';
import { View, StyleSheet } from 'react-native';

const DashedLine = ({ width, color, dashLength, dashGap, orientation }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
      width: orientation === 'vertical' ? 1 : width,
      height: orientation === 'vertical' ? width : 1,
    },
    dash: {
      flex: 1,
      height: orientation === 'vertical' ? dashLength : 1,
      width: orientation === 'vertical' ? 1 : dashLength,
      backgroundColor: color,
      margin: orientation === 'vertical' ? dashGap / 1 : 0,
       marginRight: orientation === 'horizontal' ? dashGap / 2 : 0,
    },
  });

  const numberOfDashes = Math.ceil(width / (dashLength + dashGap));

  return (
     <View style={styles.container}>
      {[...Array(numberOfDashes)].map((_, index) => (
        <View key={index} style={styles.dash} />
      ))}
    </View>
  );
};

export default DashedLine;
// DashedLine.js
// import React from 'react';
// import { View } from 'react-native';

// const DashedLine = ({ width, height, orientation,color }) => {
//   const styles = {
//     container: {
//       flexDirection: orientation === 'vertical' ? 'column' : 'row',
//       width: orientation === 'vertical' ? width : '100%',
//       height: orientation === 'horizontal' ? height : '100%',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//     },
//     dash: {
//       width: orientation === 'vertical' ? 1 : 'auto',
//       height: orientation === 'horizontal' ? 1 : 'auto',
//       flex: 1,
//       borderStyle: 'dashed',
//       backgroundColor: color,
// borderRadius: 1,
//     },
//   };

//   const renderDashes = () => {
//     const dashes = [];
//     const numDashes = orientation === 'vertical' ? height / 10 : width / 10;

//     for (let i = 0; i < numDashes; i++) {
//       dashes.push(<View key={i} style={styles.dash} />);
//     }

//     return dashes;
//   };

//   return <View style={styles.container}>{renderDashes()}</View>;
// };

// export default DashedLine;

