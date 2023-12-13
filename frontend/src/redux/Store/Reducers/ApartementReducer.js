import {
  GET_ALL_APARTMENTS_SUCCESS,
  GET_ALL_APARTMENTS_FAILURE,
  CREATE_APARTMENT_SUCCESS,
   CREATE_APARTMENT_FAILURE ,
   GET_APARTMENT_BY_ID_SUCCESS,
   GET_APARTMENT_BY_ID_FAILURE,
   UPDATE_APARTMENT_SUCCESS,
   UPDATE_APARTMENT_FAILURE
} from '../Actions/ApartementAction';

const initialState = {
  apartments: [],
  

  error: null,
};

const Apartementreducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_APARTMENTS_SUCCESS:
      return {
        ...state,
        apartments: action.payload,
        error: null,
      };
    case GET_ALL_APARTMENTS_FAILURE:
      return {
        ...state,
        apartments: [],
        error: action.payload,
      };
      case CREATE_APARTMENT_SUCCESS:
        return {
          ...state,
          apartments: [...state.apartments, action.payload],
          error: null,
        };
      case CREATE_APARTMENT_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
        case GET_APARTMENT_BY_ID_SUCCESS:
          return {
            ...state,
            apartment: action.payload,
            error: null,
          };
        case GET_APARTMENT_BY_ID_FAILURE:
          return {
            ...state,
            apartment: null,
            error: action.payload,
          };
        case UPDATE_APARTMENT_SUCCESS:
          return {
            ...state,
            apartment: action.payload,
            error: null,
          };
        case UPDATE_APARTMENT_FAILURE:
          return {
            ...state,
            error: action.payload,
          };
    default:
      return state;
  }
};



export default Apartementreducer;
