import AsyncStorage from '@react-native-async-storage/async-storage';
import { log } from '../../Utilities/Utility';

export const saveData = async (key: string, data: object | string) => {
  try {
    //let data = await encryptData(data) /*****still need to encrypt and decrypt data *****/
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    log("Error",err)
    throw err;
  }
};

export const getData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null && typeof data != 'undefined') {
      //let data = await decryptData(JSON.parse(data)) /*****still need to encrypt and decrypt data *****/
      return data;
    }
  } catch (err) {
    log("Error",err)
    throw err;
  }
  return null;
};

export const deleteData = async (keys: [string]) => {
  try {
   await Promise.all(keys.map((element: any) => AsyncStorage.removeItem(element)));
  } catch (err) {
    log("Error",err)
    throw err;
  }
};
