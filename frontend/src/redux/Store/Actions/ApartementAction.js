// actions.js
export const CREATE_APARTMENT_SUCCESS = 'CREATE_APARTMENT_SUCCESS';
export const GET_ALL_APARTMENTS_SUCCESS = 'GET_ALL_APARTMENTS_SUCCESS';
export const GET_APARTMENT_BY_ID_SUCCESS = 'GET_APARTMENT_BY_ID_SUCCESS';
export const UPDATE_APARTMENT_SUCCESS = 'UPDATE_APARTMENT_SUCCESS';
export const DELETE_APARTMENT_SUCCESS = 'DELETE_APARTMENT_SUCCESS';

export const createApartmentSuccess = (apartment) => ({
  type: CREATE_APARTMENT_SUCCESS,
  payload: apartment,
});

export const getAllApartmentsSuccess = (apartments) => ({
  type: GET_ALL_APARTMENTS_SUCCESS,
  payload: apartments,
});

export const getApartmentByIdSuccess = (apartment) => ({
  type: GET_APARTMENT_BY_ID_SUCCESS,
  payload: apartment,
});

export const updateApartmentSuccess = (apartment) => ({
  type: UPDATE_APARTMENT_SUCCESS,
  payload: apartment,
});

export const deleteApartmentSuccess = (apartment) => ({
  type: DELETE_APARTMENT_SUCCESS,
  payload: apartment,
});
