export const BASE_URL = 'https://dummyjson.com/';
export const BASE_IMAGE_URL = 'https://dummyjson.com/';
export const CMS_BASE_URL = 'https://abccom/'

export const endPoint = {
  //Just for refrence you can added strings as per your api
  DEMO : 'https://jsonplaceholder.typicode.com/todos/3',
  IMMEDIATE_BILL: 'dxl/customerBill/v3/customerBill/',
};

export const PUBLIC_TOKEN = 'W6lgJdBxZLoYpQKt1l4yv3DV6edBrg';
export const PUBLIK_API_KEY = 'elNBODJzcTN4T2pFV01';

export const requestMethod = {
  GET: 'GET',
  DELETE: 'DELETE',
  HEAD: 'HEAD',
  OPTIONS: 'OPTIONS',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  LINK: 'LINK',
  UNLINK: 'UNLINK',
};

export const errorCodes = {
  REQUEST_TIMEOUT: 1001,
  UNEXPECTED_ERROR: 1002,
  INTERNAL_SERVER_ERROR: 1003,
  NO_INTERNET: 1004,
  NO_DATA_FOUND: 1005,
  ACCESS_TOKEN_FAILURE: 1006,
  REFRESH_TOKEN_FAILURE: 1007,
  NEW_FOR_DND: 1008,
  NON_VIL_NUMBER: 1009,
  INVALID_OTP: 1010
};

export const BUSINESS_TRANSACTION_ID =
  `B${Math.round(new Date().getTime() / 1000)
    .toString()
    .substring(1)}`;

export const screens = {
  COMPONENT_LIBRARY: 'ComponentLibrary',
  VI_ADVANTAGE_DETAIL: 'TabsDetail'
}

export const parameters = {
  PARAM_LOGIN_TYPE: 'sms',
  PARAM_OTP_MOBILE: 'sms',
  PARAM_OTP_EMAIL: 'email',
};

export const SOFT_DELETED = "Given customer is soft deleted";
export const RUPEES = '\u20B9';

export const TIME_OUT = 20000;