export const initDemoData = (data) => ({
  type: 'INIT_DEMO_DATA',
  payload: data,
});

export const successDemoData = (data) => ({
  type: 'SUCCESS_DEMO_DATA',
  payload: data,
});

export const failDemoData = (data) => ({
  type: 'FAIL_DEMO_DATA',
  payload: data,
});
