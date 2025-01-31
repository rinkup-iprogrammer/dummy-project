import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Card from '../../../ComponentLibrary/Card';
import {useNavigation} from '@react-navigation/native';

const BottomNavigator = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const navigation = useNavigation();
  useEffect(() => {
    setActiveTab('Home');
  }, [activeTab]);

  const navigateToScreen = (screenName) => {
    setActiveTab(screenName);
    navigation.navigate(screenName);
  };

  const renderTab = (title) => (
    <TouchableOpacity
      key={title}
      onPress={() => navigateToScreen(title)}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{color: activeTab === title ? 'red' : 'black'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{position:'absolute',bottom:10,justifyContent:'space-around',left:20}}>
      <Card
        customStyle={{width: 350, borderRadius: 25}}>
        <View style={{flexDirection: 'row', height: 50}}>
          {['Home', 'Screen1', 'Screen2'].map((title) => renderTab(title))}
        </View>
      </Card>
    </View>
  );
};

export default BottomNavigator;
