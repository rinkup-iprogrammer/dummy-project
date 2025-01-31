const initialState = {
  initDemoData: false,
  demoData: [],
  failDemoData: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_DEMO_DATA':
      return {
        initDemoData: true,
        failDemoData: false,
      };
    case 'SUCCESS_DEMO_DATA':
      return {
        ...state,
        initDemoData:false,
        demoData: action.payload,
        failDemoData:false,
      };
    case 'FAIL_DEMO_DATA':
      return {
        initDemoData:false,
        failDemoData:true,
      };
    default:
      return state;
  }
};

export default userReducer;
