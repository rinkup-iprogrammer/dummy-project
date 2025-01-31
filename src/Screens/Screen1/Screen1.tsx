import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { showLoader, showToast } from "../../Utilities/Utility";
import { toastType } from "../../Utilities/Constants";
import { ActivityIndicatorCustom } from '../../ComponentLibrary/ActivityIndicator';
import DashedLine from '../../ComponentLibrary/DashedLine';
import Shimmer from '../../ComponentLibrary/Shimmer';
import { screens } from '../../Navigation/Language/Index';
import { spacing } from '../../Utilities/SpacingConstant';

const Screen1 = (props: {navigation:any}) => {
  const { navigation } = props;

  const handleToast = () => {
    const toastMsg = 'Toast Message Show Succefully';
    showToast(true, toastMsg, toastType.SUCCESS);
  };

  const [showActivityIndicator, setShowActivityIndicator] = useState(false);
  const [showDashedLine, setShowDashedLine] = useState(false);
  const [showShimmer, setShowShimmer] = useState(false);

  const handleButtonPress = (componentType: any) => {
    switch (componentType) {
      case 'activityIndicator':
        setShowActivityIndicator(!showActivityIndicator);
        break;
      case 'dashedLine':
        setShowDashedLine(!showDashedLine);
        break;
      case 'shimmer':
        setShowShimmer(!showShimmer);
        break;
      default:
        break;
    }
  };


  return (
    <View style={style.container}>
      <View style={style.subContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(screens.HOME)} style={style.cyanbg}>
          <Text style={style.btnText}>HomeScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(screens.SCREEN_2)} style={style.voiletbg}>
          <Text style={style.btnText}>Screen 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('activityIndicator')} style={style.cyanbg}>
          <Text style={style.btnText}>
            {showActivityIndicator ? 'Hide Activity Indicator' : 'Show Activity Indicator'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>  navigation.navigate(screens.SCREEN_4)} style={style.voiletbg}>
          <Text style={style.btnText}>
            {showDashedLine ? 'Hide Dashed Line' : 'Show Dashed Line'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('shimmer')} style={style.cyanbg} >
          <Text style={style.btnText}>
            {showShimmer ? 'Hide Shimmer' : 'Show Shimmer'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleToast} style={style.voiletbg}  >
          <Text style={style.btnText}>Toast</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={showLoader} style={style.voiletbg}>
          <Text style={style.btnText}>Full Screen Loader</Text>
        </TouchableOpacity>
        {showActivityIndicator && <ActivityIndicatorCustom />}
        {showDashedLine && <DashedLine color="red" numberOfDashes={70} />}
        {showShimmer && <Shimmer height={100} />}
      </View>
    </View>
  );
};
const style = StyleSheet.create({

container:{
   height: '90%' 
},
subContainer:{
  flex: 1, 
  justifyContent: 'center', 
  alignItems: 'center' 
},
btnText:{
     fontSize: 15, 
     fontWeight: 'bold' 
   },
  voiletbg: {
    margin: spacing.WIDTH_10,
    padding: spacing.WIDTH_10,
    borderRadius: spacing.WIDTH_10,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'violet',

  },
  cyanbg: {
    margin: spacing.WIDTH_10,
    padding: spacing.WIDTH_10,
    borderRadius: spacing.WIDTH_10,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',

  }


})



export default Screen1;
