const storedToken = JSON.parse(localStorage.getItem('userData'));
const initialState = {
  auth: {
    user: storedToken,
    token: storedToken.token,
    error: null,
    loading: false,
    name: storedToken.name,
  },
};

const authreducer = (state = initialState, action) => {
  console.log(action.type, action.payload);
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
        localStorage.setItem('userData', JSON.stringify(action.payload.user));;
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
        case 'UPDATE_NAME':
          return {
            ...state,
            auth: {
              ...state.auth,
              name: action.payload.name,
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
