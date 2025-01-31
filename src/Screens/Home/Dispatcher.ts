import {endPoint, requestMethod} from '../../Utilities/API Utilities/Constants';
import {serverCall} from '../../Utilities/API Utilities/Index';
import { toastType } from '../../Utilities/Constants';
import { showToast } from '../../Utilities/Utility';
import { failDemoData, initDemoData, successDemoData} from './Action';

export const fetchUser = () => {
  return async (dispatch: any) => {
    dispatch(initDemoData());
    const result:any = await serverCall(endPoint.DEMO, requestMethod.GET, {}, {});
    if (result.success) {
      dispatch(successDemoData(result));
    } else {
      dispatch(failDemoData());
      showToast(true,'API Error',toastType.FAILURE);
    }
  };
};
