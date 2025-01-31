import NetInfo from '@react-native-community/netinfo';
import { navigationRef } from '../../App';
import DeviceInfo from 'react-native-device-info';
import moment from 'moment';
import { screens } from '../Navigation/Language/Index';
export const navigateToScreen = (screenName, props) => {
  navigationRef.current?.navigate(screenName, props);
};

export const showToast = (
  show,
  message,
  toastType,
  headingMessage,
  isCybToast = false,
  isDarkToast = false,
) => {
  navigateToScreen(screens.TOAST, {
    show,
    message,
    toastType,
    headingMessage,
    isCybToast,
    isDarkToast,
  });
};

export const networkAvailable = () => new Promise((resolve, reject) =>
  NetInfo.fetch().then((state) => state.isConnected ? resolve(true) : resolve(false)))

export const getAppVersion = () => {
  if (Platform.OS == "android") {
    return DeviceInfo.getVersion()
  } else {
    return DeviceInfo.getVersion();
  }
};

export const getLocalDateTimeParse = () => {
  const localFormat = 'YYYY-MM-DD[T]HH:mm:ss';
  return moment().format(localFormat)
}

export const getAppVersionsBuild = () => {
  return DeviceInfo.getBuildNumber()
};

export const getAPIName = (url) => {
  const data = {
    apiShortName: '',
    apiBaseName: ''
  }

  const splitByQn = url.split("?")[0]
  let apiBaseName = splitByQn
  const splitBySlsh = splitByQn.split("/");
  if (splitBySlsh.length > 0) {
    const mobile = parseInt(splitBySlsh[splitBySlsh.length - 1]);
    if (Number.isInteger(mobile)) {
      apiBaseName = splitByQn.replace(mobile, '')
    }
  }
  data.apiBaseName = apiBaseName

  return data
}

export const log = (TAG, message) => {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    console.log(TAG, message);
  }
}

// For progress bar hide 
export const hideShowLoader = () => {
  navigationRef.current?.goBack();
}

// For progress bar show
export const showLoader = () => {
  navigateToScreen(screens.FULLSCREENLOADER,{})
  setTimeout(()=>{
    hideShowLoader()
  },10000)
}