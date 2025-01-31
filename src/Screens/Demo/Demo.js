import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  Alert,
  Pressable,
  FlatList,
} from 'react-native';
import {Button} from '../../ComponentLibrary/Button';
import {buttonSize, buttonType, spacing} from '../../Utilities/SpacingConstant';
import RadioButton from '../../ComponentLibrary/RadioButton';
import Model from '../../ComponentLibrary/DropDown/Modal';
import DropDown from '../../ComponentLibrary/DropDown/DropDown';
import {serverCall} from '../../Utilities/API Utilities/Index';
import {requestMethod} from '../../Utilities/API Utilities/Constants';
import {ActivityIndicatorCustom} from '../../ComponentLibrary/ActivityIndicator';
import DashedLine from '../../ComponentLibrary/DashedLine';
import Shimmer from '../../ComponentLibrary/Shimmer';
import DeviceInfo from 'react-native-device-info';
import {showLoader, showToast} from '../../Utilities/Utility';
import {commonStrings, toastType} from '../../Utilities/Constants';
import {screens} from '../../Navigation/Language/Index';
import EditText from '../../ComponentLibrary/EditText';
import {color} from '../../Utilities/ColorConstants';
import {CheckBox} from '../../ComponentLibrary/CheckBox';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ModalPopup from '../../ComponentLibrary/ModalPopup';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUser} from '../Home/Dispatcher';
import Card from '../../ComponentLibrary/Card';
import crashlytics from '@react-native-firebase/crashlytics';
import {RetryPopup} from '../../ComponentLibrary/RetryPopup';
const Demo = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectValue, setSelectValue] = useState();
  const [selectId, setSelectId] = useState('');
  const [editText, setEditText] = useState('');
  const [screen, setScreen] = useState('dropdown');
  const [checked, setChecked] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isCustomModalVisible, setIsCustomModalVisible] = useState(false);
  const [isLiked, setIsLiked] = useState([
    {id: 1, value: true, name: 'Yes', selected: false},
    {id: 2, value: false, name: 'No', selected: false},
  ]);
  const [showShimmer, setShowShimmer] = useState(false); // New state variable
  const [dashedLineTexts, setDashedLineTexts] = useState([]);
  const dispatch = useDispatch();
  const demoData = useSelector((state) => state.userReducer.demoData);

  const device_version = DeviceInfo.getSystemVersion();
  const model = DeviceInfo.getModel();
  const [showRetryModal, setShowRetryModal] = useState(false);
  function handelPress() {
    Alert.alert(`${device_version} , ${model}`);
  }

  const handleCustomModalPopup = () => {
    setIsCustomModalVisible(false);
  };

    function handelPress() {
      Alert.alert(`${device_version} , ${model}`)
    }
    const handleShimmerToggle = () => {
        setShowShimmer(!showShimmer);
      };
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
    const addDashedLineTexts = () => {
        const newTexts = [
          { text: 'This is', lineColor: 'red', width:100 },
          { text: 'Dynamic', lineColor: 'blue',width:200 },
          { text: 'Line', lineColor: 'green',width:300 },
        ];
        setDashedLineTexts(newTexts);
      };
    const selectItem = (item) => {
        setSelectValue(item.item.name)
        setSelectId(item.item.id)
    }
   
  const renderItem = (item) => (
    <ScrollView>
      <View
        style={{
          backgroundColor: item.item.id == selectId ? 'lightgray' : 'white',
          padding: 8,
          borderRadius: 18,
        }}>
        <TouchableOpacity onPress={() => selectItem(item)}>
          <Text
            style={{
              fontSize: 15,
              color: item.item.id == selectId ? 'white' : 'black',
            }}>
            {item.item.name}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  const selectOption = () => {
    setModalVisible(true);
  };

  const onRadioBtnClick = (item) => {
    const updatedState = isLiked.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? {...isLikedItem, selected: true}
        : {...isLikedItem, selected: false},
    );
    setIsLiked(updatedState);
  };

  const serverResponse = async () => {
    const result = await serverCall('products/1', requestMethod.GET, {}, {});
    Alert.alert(JSON.stringify(result));
  };

 
    const screenList = [
        { name: 'dropdown' },
        { name: 'radio' },
        { name: 'modal' },
        { name: 'api' },
        { name: 'activityIndicator' },
        { name: 'HorizontalDashedLine' },
        { name: 'VerticalDashedLine' },
        { name: 'shimmer' },
        { name: 'deviceInfo' },
        { name: 'permission' },
        { name: 'toast' },
        { name: 'bottomNavigator' },
        { name: 'NoInternet' },
        { name: 'editText' },
        { name: 'checkbox' },
        { name: 'datetime' },
        { name: 'fullScreenLoader' },
        {name: commonStrings.REDUX_API_CALL},
        {name: 'testCrash'},
        {name: 'ModalPopup'},
        {name:'RetryPopup'},
    ]

  const handleToast = () => {
    const toastMsg = 'Wrong OTP';
    showToast(true, toastMsg, toastType.FAILURE);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

    const handleRetry = () => {
    // Implement retry logic here
    // You can close the modal using setShowRetryModal(false) after successful retry
    };

    const handleCancel = () => {
    setShowRetryModal(false);
    };

  const renderComponent = (item) => {
    return (
      <Pressable
        style={styles.screenButton}
        onPress={() => {
          setScreen(item.name);
          switch (item.name) {
            case 'api':
              serverResponse();
              break;
            case 'deviceInfo':
              handelPress();
              break;
            case 'permission':
              props.navigation.navigate(screens.PERMISSION);
              break;
            case 'toast':
              handleToast();
              break;
            case 'bottomNavigator':
              props.navigation.navigate('BottomNavigator');
              break;
            case 'NoInternet':
              props.navigation.navigate(screens.NOINTERNET);
              break;
            case 'datetime':
              showDatePicker();
              break;
            case 'fullScreenLoader':
                showLoader();
              break;
            case 'testCrash':
              crashlytics().crash();
              break;
            case commonStrings.REDUX_API_CALL:
              dispatch(fetchUser());
              // props.navigation.navigate(screens.SCREEN_2);
              break;
            case 'ModalPopup':
              setIsCustomModalVisible(true);
              break;
              case 'RetryPopup':
                setShowRetryModal(true);
                break;
            default:
              break;
          }
        }}>
        <Text>{item.name}</Text>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={{flexDirection: 'row'}}>
      <View style={{flex: 0.3, backgroundColor: 'green', paddingBottom: 20}}>
        <FlatList
          data={screenList}
          renderItem={({item}) => renderComponent(item)}
          keyExtractor={(item) => item.name}
        />
      </View>

      <View style={{flex: 0.6, marginLeft: 10}}>
        <View
          style={{
            justifyContent: 'center',
            margin: 15,
            marginBottom: 50,
          }}>
          {(screen == 'dropdown' || screen == 'modal') && (
            <Model
              modalVisible={modalVisible}
              setModalVisible={() => setModalVisible(false)}
              data={data}
              renderItem={renderItem}
              headingLabel={'Select State'}></Model>
          )}
          {screen == 'dropdown' && (
            <DropDown
              selectOption={selectOption}
              selectValue={selectValue}
              ismodalVisible={modalVisible}
              headingLabel={'Select State'}></DropDown>
          )}
        </View>
        {screen == 'modal' && (
          <Button
            label={'Open Modal'}
            type={buttonType.PRIMARY}
            size={buttonSize.LARGE}
            disabled={false}
            onPress={() => {
              selectOption();
            }}
          />
        )}
        {screen == 'radio' && (
          <View style={{flexDirection: 'row', marginVertical: 50}}>
            {isLiked.map((item) => (
              <RadioButton
                onPress={() => onRadioBtnClick(item)}
                selected={item.selected}
                key={item.id}>
                {item.name}
              </RadioButton>
            ))}
          </View>
        )}
        {/* {screen == 'api' &&
                    <Button
                        label={'API Call'}
                        type={buttonType.PRIMARY}
                        size={buttonSize.LARGE}
                        disabled={false}
                        onPress={() => {
                            serverResponse()
                        }}
                    />
                } */}
        {/* {screen == 'deviceInfo' &&
                    <Button
                        label={'DeviceInfo'}
                        type={buttonType.PRIMARY}
                        size={buttonSize.LARGE}
                        disabled={false}
                        onPress={() => {
                            handelPress()
                        }}
                    />
                }
                {screen == 'permission' &&
                    <Button
                        label={'permission'}
                        type={buttonType.PRIMARY}
                        size={buttonSize.LARGE}
                        disabled={false}
                        onPress={() => {
                            props.navigation.navigate(screens.PERMISSION)
                        }}
                    />
                } */}
        {/* {screen == 'toast' &&
                    <Button
                        label={'toast'}
                        type={buttonType.PRIMARY}
                        size={buttonSize.LARGE}
                        disabled={false}
                        onPress={() => {
                            handleToast()
                        }}
                    />
                }
                {screen == 'bottomNavigator' &&
                    <Button
                        label={'bottomNavigator'}
                        type={buttonType.PRIMARY}
                        size={buttonSize.LARGE}
                        disabled={false}
                        onPress={() => {
                            props.navigation.navigate('BottomNavigator')
                        }}
                    />
                } */}
        {/* {screen == 'NoInternet' &&
                    <Button
                        label={'NoInternet'}
                        type={buttonType.PRIMARY}
                        size={buttonSize.LARGE}
                        disabled={false}
                        onPress={() => {
                            props.navigation.navigate(screens.NOINTERNET)
                        }}
                    />
                } */}
        {screen == 'editText' && (
          <EditText
            onChangeText={(text) => setEditText(text)}
            value={editText}
            placeHolder={'placeholder'}
            tintColor={color.SECONDARY_DARK_4}
            height={spacing.WIDTH_50}
            borderRadius={spacing.WIDTH_10}
            AnimPlaceHolderbackgroundColor={'#fff'}
            maxLength={100}
            customStyle={{color: color.SECONDARY_DARK_3}}
          />
        )}
        {screen == 'checkbox' && (
          <>
            <CheckBox
              onClick={() => setChecked(!checked)}
              isChecked={checked}
              label={'firstChoice'}
            />
            <Button
              label={checked ? 'Active' : 'Inactive'}
              type={buttonType.PRIMARY}
              size={buttonSize.LARGE}
              disabled={checked ? false : true}
              onPress={() => {}}
            />
          </>
        )}
        {screen == 'datetime' && (
          <>
            {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </>
        )}

        {screen == 'activityIndicator' && <ActivityIndicatorCustom />}
        {screen == 'HorizontalDashedLine' && (
                    
                    <>
                    <Text>This</Text>
                     <DashedLine width={27} color="red" dashLength={11} dashGap={4} orientation="horizontal" />
                     <Text></Text>
                     <Text>is Dynamically</Text>
                     <DashedLine width={90} color="green" dashLength={10} dashGap={4} orientation="horizontal" />
                     <Text></Text>
                     <Text>Handled Line</Text>
                     <DashedLine width={86} color="black" dashLength={10} dashGap={4} orientation="horizontal" />
                    
                    
                    </>
                    
                    )}
                    {screen == 'VerticalDashedLine' &&(
                        <>
                        <Text>These are dyanamic vertical lines</Text>
                        <Text></Text>
                    <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                    <DashedLine  width={200} color="red" dashLength={10} dashGap={4} orientation="vertical" />
                   <Text></Text>
                   <DashedLine width={250} color="red" dashLength={10} dashGap={4} orientation="vertical" />
                   <Text></Text>
                   <DashedLine width={100} color="red" dashLength={10} dashGap={4} orientation="vertical" />

                     </View>
                     </>)}
                     {screen == 'shimmer' && (
          <>
            <Button
              label={showShimmer ? 'Hide Shimmer' : 'Show Shimmer'} // Update button label
              type={buttonType.PRIMARY}
              size={buttonSize.LARGE}
              onPress={handleShimmerToggle}
            />
            <Text></Text>
            {showShimmer && <Shimmer height={100} />}
          </>
        )}     
           {screen == commonStrings.REDUX_API_CALL && (
          <View>
            <Card customStyle={{width: 300, height: 50}}>
              <Text
                style={{color: 'red', fontWeight: 'bold', textAlign: 'center'}}>
                "Values from store"
              </Text>
              {demoData?.data?.title ? (
                <Text style={{color: 'red', textAlign: 'center'}}>
                  {demoData.data.title}
                </Text>
              ) : null}
            </Card>
          </View>
        )}
        {screen == 'ModalPopup' && (
          <ModalPopup
            isVisible={isCustomModalVisible}
            onClose={() => setIsCustomModalVisible(false)}
            imageSource={require('../../Assets/Images/Webp/enableExcellent.webp')}
            modalText="Dynamic text goes here"
            isButtonVisible={true}
            onButtonClick={handleCustomModalPopup}
          />
        )}
        {screen=='RetryPopup'&&(
          <RetryPopup
          isVisible={showRetryModal}
          onRetry={handleRetry}
          onCancel={handleCancel}
          title="Network request failed. Retry?"
          />
        )}
      </View>
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
  screenButton: {
    width: 90,
    height: 35,
    borderWidth: 0.2,
    borderRadius: 20,
    borderColor: 'gray',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default Demo;
