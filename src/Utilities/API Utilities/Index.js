import NetInfo from '@react-native-community/netinfo';
import axios from 'axios'
import { BASE_URL, endPoints, TIME_OUT, requestMethod, PUBLIC_TOKEN, PUBLIK_API_KEY, BUSINESS_TRANSACTION_ID, screens, SOFT_DELETED } from './Constants';
import {  } from './Constants'
import { getToken, saveToken, logout } from '../../Storage/Token'
import { errorCodes } from './Constants';
import { strings } from './ErrorMessage';
import { Platform, NativeModules, PermissionsAndroid } from 'react-native';
import DeviceInfo from 'react-native-device-info'
// import { strings as loginStrings } from '../Language/Index'
// import { getAppVersion, getLocalDateTimeParse, getAppVersionsBuild, getAPIName, log } from '../Utility';
// import { CommonActions } from '@react-navigation/native';

const reGeneratingAccessToken = false
let isNetworkType = '';
let isNetworkAvailable = '';
let simName = '';

export const networkAvailable = () => new Promise((resolve, reject) =>
    NetInfo.fetch().then((state) => state.isConnected ? resolve(true) : resolve(false)))

export const networkStateAvailable = () => new Promise((resolve, reject) =>
    NetInfo.fetch().then((state) => state ? resolve(state) : resolve(false)))

export const getCellInfo = async () => {
    const permission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE)
    if (permission) {
        NativeModules.SimInfo.getNetworkTypeCheck((response) => {
            isNetworkType = response;
        })
    }
};

export const serverCall = async (url, method, data, additionalHeader, selectedUser, isFromPromo = false) => new Promise(async (resolve, reject) => {
    
    const asyncToken = await getToken()
    let bearerToken = ""
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    if ((asyncToken != null && asyncToken != undefined)) {
        bearerToken = asyncToken.accessToken.accessToken
    } else {
        bearerToken = PUBLIC_TOKEN
    }
    let headers = {
        'Authorization': `Bearer ${bearerToken}`,
        'Channel': 'VF-CON-APP',
        'if-none-match': '',
        'Connection': 'close',
        'Content-Type': 'application/json',
        'Cache Control': 'no-cache, no-store, must-revalidate, pre-check=0, post-check=0',
        'Pragma': 'No-cache',
        'Expires': 'header',
        'X-BusinessTx-ID': BUSINESS_TRANSACTION_ID,
        'X-External-CorrelationId': `C${Math.round(new Date().getTime()) + Math.floor(Math.random() * 10).toString()}`,
    }

    headers = { ...headers, ...additionalHeader }
    const timeout = TIME_OUT
    const baseURL = BASE_URL

    isNetworkAvailable = await networkStateAvailable();
    simName = await DeviceInfo.getCarrier()
    if (isNetworkAvailable.type === 'wifi') {
        isNetworkType = isNetworkAvailable.type;
    } else {
        if (Platform.OS === 'android') {
            isNetworkType = await getCellInfo();
            if (isNetworkType === undefined) { isNetworkType = "Unknown" }
        } else {
            isNetworkType = isNetworkAvailable.details.cellularGeneration;
            isNetworkType = `${isNetworkType}_${simName.toLowerCase()}`;
        }
    }
    let requestObject = {}

    if (method == requestMethod.GET) {
        requestObject = {
            url, method, baseURL: `${baseURL}`, timeout, timeoutErrorMessage: strings.request_timeout, responseType: 'json', headers
        }
    } else {
        requestObject = {
            url, method, baseURL: `${baseURL}`, data, timeout, timeoutErrorMessage: strings.request_timeout, responseType: 'json', headers
        }
    }

    const net = await networkAvailable()

    if (!net) {
        resolve({ success: false, data: {}, errorCode: errorCodes.NO_INTERNET, message: strings.no_internet })
    } else if (reGeneratingAccessToken && (!url.includes('lookup') || !url.includes('generateOTP') || !url.includes('validateOTP') || !url.includes('productOffering') || !url.includes('customerMarketingProduct') || !url.includes('/v3/profile/'))) {
        resolve({ success: false, errorCode: errorCodes.ACCESS_TOKEN_FAILURE, data: {}, message: strings.server_error })
    } else {

        const response = null;
        let isRequestTimeout = false;

        const timer = setTimeout(() => {
            if (response === null) {
                isRequestTimeout = true;
                source.cancel();
            }
        }, timeout);

        axios.request(requestObject)
            .then(async (response) => {
                clearTimeout(timer);
                if (response.status === 200) {
                    usedRefToken = ""
                    resolve({ success: true, data: response.data, message: '' })
                } 
                else if (response.status === 403) {
                    resolve({ success: false, data: {}, message: '', requestObject })
                } else if (response.status === 406) {
                    resolve({ success: false, data: {}, message: '', requestObject })
                } else if (response.status === 501) {
                    resolve({ success: false, data: {}, message: '', requestObject })
                } else {
                    resolve({ success: false, data: {}, message: '', requestObject })
                }
            })
            .catch(async (error) => {
                clearTimeout(timer);
            })
    }
})


