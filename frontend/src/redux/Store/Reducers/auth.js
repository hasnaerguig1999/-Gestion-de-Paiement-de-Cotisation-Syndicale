const initialState = {
    auth: {
      user: null,
      token: null,
      error: null,
      loading: false,
    },
  };
  
  const authreducer = (state = initialState, action) => {
  
    console.log(action.type,action.payload)
    switch (action.type) {
      case 'AUTH_REQUEST':
        return {
          ...state,
          auth: {
            ...state.auth,
            loading: true,
            error: null,
          },
        };
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          auth: {
            ...state.auth,
            user: action.payload.user,
            token: action.payload.user.token,
            loading: false,
            error: null,
          },
        };
        case 'LOGIN_SUCCESS':
          return {
            ...state,
            auth: {
              ...state.auth,
              user: action.payload.user,
              token: action.payload.user.token,
              loading: false,
              error: null,
            },
          };
      case 'AUTH_FAIL':
        return {
          ...state,
          auth: {
            ...state.auth,
            loading: false,
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };
  export default authreducer;
  