import AsyncStorage from '@react-native-async-storage/async-storage';
import {storageKeys} from '../Utilities/Constants';
import {saveData, getData} from './Database/DB';

export const saveToken = async (token: string) => {
  try {
    await saveData(storageKeys.TOKEN_KEY, JSON.stringify(token));
  } catch (err) {
    throw err;
  }
};

export const getToken = async () => {
  try {
    const token = await getData(storageKeys.TOKEN_KEY);
    if (token !== null && typeof token != 'undefined') {
      return JSON.parse(token);
    }
  } catch (err) {
    throw err;
  }
  return null;
};

export const deleteAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (err) {
    throw err;
  }
};

export const logout = async () => {
  try {
    await AsyncStorage.removeItem(storageKeys.TOKEN_KEY);
    // await AsyncStorage.removeItem(storageKeys.IS_COACHMARK_SHOWED);
    // await AsyncStorage.removeItem(storageKeys.TEALIUM_CURRENT_SCREEN);
    // await AsyncStorage.removeItem(storageKeys.NOTIFICATION_STORE);
    // await AsyncStorage.removeItem(storageKeys.NOTIFICATION_TOKEN);
    // await AsyncStorage.removeItem(storageKeys.USER_DATA);
  } catch (err) {
    throw err;
  }
};
