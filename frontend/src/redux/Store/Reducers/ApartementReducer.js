
import {
    CREATE_APARTMENT_SUCCESS,
    GET_ALL_APARTMENTS_SUCCESS,
    GET_APARTMENT_BY_ID_SUCCESS,
    UPDATE_APARTMENT_SUCCESS,
    DELETE_APARTMENT_SUCCESS,
  } from '../Actions/ApartementAction';
  
  const initialState = {
    apartments: [],
    selectedApartment: null,
  };
  
  const Apartementreducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_APARTMENT_SUCCESS:
        return {
          ...state,
          apartments: [...state.apartments, action.payload],
        };
      case GET_ALL_APARTMENTS_SUCCESS:
        return {
          ...state,
          apartments: action.payload,
        };
      case GET_APARTMENT_BY_ID_SUCCESS:
        return {
          ...state,
          selectedApartment: action.payload,
        };
      case UPDATE_APARTMENT_SUCCESS:
        return {
          ...state,
          apartments: state.apartments.map((apartment) =>
            apartment._id === action.payload._id ? action.payload : apartment
          ),
        };
      case DELETE_APARTMENT_SUCCESS:
        return {
          ...state,
          apartments: state.apartments.filter(
            (apartment) => apartment._id !== action.payload._id
          ),
          selectedApartment: null,
        };
      default:
        return state;
    }
  };
  
  export default Apartementreducer;
  