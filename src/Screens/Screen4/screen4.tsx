import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DashedLine from '../../ComponentLibrary/DashedLine'; // Update the path accordingly
import { color } from '../../Utilities/ColorConstants';
import { spacing } from '../../Utilities/SpacingConstant';

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {/* <Text style={styles.cardTitle}>{title}</Text> */}
        <DashedLine width={300} color="red" dashLength={10} dashGap={4} orientation="vertical" /> 
        {/* <DashedLine width={10} height={80} color="black" orientation="horizontal" /> */}
               {/* <Text style={styles.cardContent}>{content}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor:color.WHITE,
    borderRadius:spacing.WIDTH_16,
    //  margin:spacing.WIDTH_16,
    // elevation: 3,
    width: '80%',
    height:"45%",
    justifyContent:"center",
    alignItems:"center"
  },
  cardTitle: {
     fontSize: 10,
    fontWeight: 'bold',
     marginBottom: 8,
  },

});

export default Card;
