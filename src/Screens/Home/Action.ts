export const initDemoData = (data: any) => ({
  type: 'INIT_DEMO_DATA',
  payload: data
});

export const successDemoData = (data: any) => ({
  type: 'SUCCESS_DEMO_DATA',
  payload: data
});

export const failDemoData = (data: any) => ({
  type: 'FAIL_DEMO_DATA',
  payload: data
});
