import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, StyleSheet, ScrollView, Alert } from 'react-native';
import { Button } from '../../ComponentLibrary/Button';
import { buttonSize, buttonType, spacing } from '../../Utilities/SpacingConstant';
import RadioButton from '../../ComponentLibrary/RadioButton';
import Model from '../../ComponentLibrary/DropDown/Modal';
import DropDown from '../../ComponentLibrary/DropDown/DropDown';
import { serverCall } from '../../Utilities/API Utilities/Index';
import { requestMethod } from '../../Utilities/API Utilities/Constants';


const Screen3 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectValue, setSelectValue] = useState();
  const [selectId, setSelectId] = useState('');
  const [isLiked, setIsLiked] = useState([
    { id: 1, value: true, name: "Yes", selected: false },
    { id: 2, value: false, name: "No", selected: false }
  ]);

  const data = [
    {
      id: 1,
      name: 'Gujarat'
    },
    {
      id: 2,
      name: 'Andhra Pradesh'
    },
    {
      id: 3,
      name: 'Haryana'
    },
    {
      id: 4,
      name: 'Manipur'
    },
    {
      id: 5,
      name: 'Sikkim'
    },
    {
      id: 6,
      name: 'Assam'
    },
    {
      id: 7,
      name: 'Bihar'
    },
    {
      id: 8,
      name: 'Goa'
    },
    {
      id: 9,
      name: 'Maharashtra'
    },
    {
      id: 10,
      name: 'Jammu'
    },
  ];

  const selectItem = (item: any) => {
    setSelectValue(item.item.name)
    setSelectId(item.item.id)
  }

  const renderItem = (item: any) => <ScrollView>
    <View style={{
      backgroundColor: item.item.id == selectId ? "lightgray" : 'white',
      padding: 8,
      borderRadius: 18,
    }}>
      <TouchableOpacity
        onPress={() => selectItem(item)}
      >
        <Text style={{
          fontSize: 15,
          color: item.item.id == selectId ? "white" : 'black',
        }}
        >
          {item.item.name}
        </Text>
      </TouchableOpacity>
    </View>
  </ScrollView>;

  const selectOption = () => {
    setModalVisible(true)
  }

  const onRadioBtnClick = (item: any) => {
    const updatedState = isLiked.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );
    setIsLiked(updatedState);
  };

  const serverResponse = async () => {
    const result = await serverCall('products/1', requestMethod.GET, {}, {});
    Alert.alert(JSON.stringify(result))
  }

  return (
    <SafeAreaView style={{ paddingHorizontal: 20 }}>
      <View style={{
        justifyContent: 'center',
        margin: 15,
        marginBottom: 50
      }}>
        <Model
          modalVisible={modalVisible}
          setModalVisible={() => setModalVisible(false)}
          data={data}
          renderItem={renderItem}
          headingLabel={'Select State'}
        >
        </Model>
        <DropDown
          selectOption={selectOption}
          selectValue={selectValue}
          ismodalVisible={modalVisible}
          headingLabel={'Select State'}
        >
        </DropDown>
      </View>

      <Button
        label={'Open Modal'}
        type={buttonType.PRIMARY}
        size={buttonSize.LARGE}
        disabled={false}
        onPress={() => {
          selectOption()
        }}
      />
      <View style={{ flexDirection: 'row', marginVertical: 50 }}>
        {isLiked.map((item) => (
          <RadioButton
            onPress={() => onRadioBtnClick(item)}
            selected={item.selected}
            key={item.id}
          >
            {item.name}
          </RadioButton>
        ))}
      </View>
      <Button
        label={'API Call'}
        type={buttonType.PRIMARY}
        size={buttonSize.LARGE}
        disabled={false}
        onPress={() => {
          serverResponse()
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Screen3;
