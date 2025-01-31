import React from 'react';
import {View, Text, TouchableOpacity, TextComponent} from 'react-native';
import { screens } from '../../Navigation/Language/Index';
import DeviceInfo from 'react-native-device-info';
import { useSelector } from 'react-redux';
import { fontSizes } from '../../Utilities/SpacingConstant';
import Card from '../../ComponentLibrary/Card';

const Screen2 = (props: {navigation:any}) => {
  const {navigation} = props;
  const device_version = DeviceInfo.getSystemVersion()
  const model = DeviceInfo.getModel();
  const demoData = useSelector((state:any) => state.userReducer.demoData);

  function handelPress(){
    console.log(`${device_version} , ${model}`)
  }

  return (
    <View style={{height: '100%'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate(screens.HOME)}
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 10,
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'cyan',
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>HomeScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(screens.SCREEN_1)}
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 10,
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'violet',
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Screen 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handelPress()}
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 10,
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'violet',
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Device Info</Text>
        </TouchableOpacity>
        <Card customStyle={{width:300,height:50,}}>
        <Text style={{color :'red', fontWeight : 'bold',textAlign:'center'}}>"API RESPONSE"</Text>
        {
          demoData?.data?.title ? <Text style={{color:'red',textAlign:'center'}}>{demoData.data.title}</Text> : null
        }
        </Card>
      </View>
    </View>
  );
};

export default Screen2;
